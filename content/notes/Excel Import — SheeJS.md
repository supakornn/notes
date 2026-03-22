---
created: 2026-03-22
tags:
  - seed
title: Excel Import — SheeJS
---
Convert Excel → validated → deduplicated → DB records safely

---
### Flow

1. Receive file (multipart)
2. Parse Excel
3. Convert to JSON
4. Validate rows
5. Deduplicate
6. Insert
7. Return summary
    
---
### Route (Receive File)

```ts
const body = await c.req.parseBody();
const file = body['file'];

if (!(file instanceof File)) {
  return c.json(
    { error: { code: 'VALIDATION_ERROR', message: 'file is required' } },
    400
  );
}

const buffer = await file.arrayBuffer();

const result = await importStudents(subjectId, userId, buffer);

return c.json({ data: result }, 200);
```

---
### Service

```ts
import { read, utils } from 'xlsx';

export async function importStudents(
  subjectId: string,
  userId: string,
  fileBuffer: ArrayBuffer
) {
  await requireEditor(subjectId, userId);

  // 1. Parse Excel
  const wb = read(fileBuffer, { type: 'array' });
  const ws = wb.Sheets[wb.SheetNames[0]!];

  if (!ws) {
    throw new StudentError(400, 'INVALID_FILE', 'Could not read Excel file');
  }

  // 2. Convert to JSON
  const rows = utils.sheet_to_json<Record<string, unknown>>(ws, {
    defval: '',
  });

  // 3. Validate
  const validated: { studentCode: string; fullName: string }[] = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]!;

    const studentCode = String(row['student_code'] ?? '').trim();
    const fullName = String(row['full_name'] ?? '').trim();

    if (!studentCode || !fullName) {
      throw new StudentError(
        422,
        'INVALID_ROW',
        `Row ${i + 2}: "student_code" and "full_name" are required`
      );
    }

    validated.push({ studentCode, fullName });
  }

  // 4. Deduplicate (in file)
  const seen = new Set<string>();
  for (const row of validated) {
    if (seen.has(row.studentCode)) {
      throw new StudentError(
        422,
        'DUPLICATE_IN_FILE',
        `Duplicate student_code "${row.studentCode}"`
      );
    }
    seen.add(row.studentCode);
  }

  // 5. Deduplicate (against DB)
  const existing = await listStudents(subjectId);
  const existingCodes = new Set(existing.map((s) => s.studentCode));

  const toInsert = validated.filter(
    (r) => !existingCodes.has(r.studentCode)
  );

  const skipped = validated.length - toInsert.length;

  // 6. Insert
  if (toInsert.length > 0) {
    await bulkCreateStudents(
      toInsert.map((r) => ({
        subjectId,
        studentCode: r.studentCode,
        fullName: r.fullName,
      }))
    );
  }

  // 7. Summary
  return {
    imported: toInsert.length,
    skipped,
  };
}
```

---
### Frontend

```ts
const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const form = new FormData();
  form.append('file', file);

  const result = await apiClient.upload<{ data: ImportResult }>(
    `/subjects/${subjectId}/students/import`,
    form
  );

  setImportStatus(
    `Imported ${result.data.imported}, skipped ${result.data.skipped}`
  );
};
```

---
### Key Rules

- Header must match template exactly
- Always cast + trim (Excel is unreliable)
- Fail fast on invalid row (no partial by default)
- Handle duplicates:
    - inside file
    - against DB
- Always bulk insert (no per-row DB calls)
    
