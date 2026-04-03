---
created: 2026-03-22
title: SheetJS Generate Excel Template
tags:
  - seed
---
**Flow:**

1. Define headers (source of truth / schema contract)
2. Generate workbook (no formulas / formatting logic)
3. Return as downloadable file
    
---
## Generic Template Service

```ts
import { utils, write } from 'xlsx';

export function generateExcelTemplate(
  sheetName: string,
  headers: string[]
): Buffer {
  const wb = utils.book_new();

  // Contract: headers = source of truth
  const ws = utils.aoa_to_sheet([headers]);

  // Optional UX: set column width
  ws['!cols'] = headers.map((h) => ({ wch: Math.max(10, h.length + 5) }));

  utils.book_append_sheet(wb, ws, sheetName);

  return Buffer.from(write(wb, { type: 'buffer', bookType: 'xlsx' }));
}
```

---
## Generic Route

```ts
const buffer = generateExcelTemplate('Students', ['student_code', 'full_name']);

return new Response(buffer, {
  headers: {
    'Content-Type':
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'Content-Disposition': 'attachment; filename="students_template.xlsx"',
  },
});
```

---
## Frontend

```ts
const handleDownloadTemplate = () => {
  window.open(`/api/v1/subjects/${subjectId}/students/template`, '_blank');
};
```

---
## Key Patterns / Rules

1. **Header = contract** → must match import keys exactly
2. **Do not add/remove columns casually** → import depends on it
3. **Keep minimal** → no formulas, no formatting logic
4. **Generic** → just pass `sheetName` + `headers` → reusable for any entity

---
**See also**
- [[SheetJS Excel Import]]