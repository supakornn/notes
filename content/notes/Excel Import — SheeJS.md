---
created: 2026-03-22
tags:
  - seed
title: Excel Import — SheeJS
---

**Flow:**
1. Receive file (multipart/form-data)
2. Parse Excel/CSV → JSON rows
3. Validate each row → fail fast if invalid
4. Deduplicate:
    - In-file duplicates
    - Against DB existing records
5. Bulk insert new rows
6. Return summary (imported/skipped/errors)
    

---
### Generic Route (Receive File)

```ts
const body = await c.req.parseBody();
const file = body['file'];

if (!(file instanceof File)) {
  return c.json({ error: { code: 'VALIDATION_ERROR', message: 'file is required' } }, 400);
}

const buffer = await file.arrayBuffer();

// Pass to generic import function
const result = await importRecords<EntityType>(buffer, {
  validateRow: (row) => {
    // return typed row or throw error
  },
  getRecordKey: (row) => row.id, // key for deduplication
  listExisting: async () => [],   // fetch existing records
  bulkInsert: async (rows) => {}, // insert function
});

return c.json({ data: result }, 200);
```

---
### Generic Import Service

```ts
import { read, utils } from 'xlsx';

export async function importRecords<T>(
  fileBuffer: ArrayBuffer,
  options: {
    validateRow: (row: Record<string, unknown>) => T;
    getRecordKey: (row: T) => string;
    listExisting: () => Promise<T[]>;
    bulkInsert: (rows: T[]) => Promise<void>;
  }
) {
  // Parse Excel
  const wb = read(fileBuffer, { type: 'array' });
  const ws = wb.Sheets[wb.SheetNames[0]!];
  if (!ws) throw new Error('Could not read Excel file');

  const rows = utils.sheet_to_json<Record<string, unknown>>(ws, { defval: '' });

  // Validate rows
  const validated: T[] = rows.map((r, i) => options.validateRow(r));

  // Deduplicate in file
  const seen = new Set<string>();
  for (const row of validated) {
    const key = options.getRecordKey(row);
    if (seen.has(key)) throw new Error(`Duplicate key in file: ${key}`);
    seen.add(key);
  }

  // Deduplicate against DB
  const existing = await options.listExisting();
  const existingKeys = new Set(existing.map(options.getRecordKey));
  const toInsert = validated.filter((r) => !existingKeys.has(options.getRecordKey(r)));

  // Bulk insert
  if (toInsert.length > 0) await options.bulkInsert(toInsert);

  return {
    imported: toInsert.length,
    skipped: validated.length - toInsert.length,
  };
}
```

---

### Key Patterns to Reuse

1. **Always cast + trim** → Excel / CSV cells are unreliable
2. **Fail fast** → invalid rows should throw immediately
3. **Deduplicate** → in-file + against DB
4. **Bulk insert** → no per-row DB calls
5. **Return summary** → imported/skipped count
6. **Generic row typing** → allow reuse for any entity (students, products, orders, etc.)
    