---
created: 2026-03-22
title: Excel Template Generation - SheeJS
tags:
  - seed
---
Define a **strict Excel schema** that will be used as the contract for imports.  
If headers change → import logic must change.

---
### Flow

1. Define headers (source of truth)
2. Generate workbook
3. Return as downloadable file

---
### Service

```ts
import { utils, write } from 'xlsx';

export function generateStudentTemplate(): Buffer {
  const wb = utils.book_new();

  // Contract: must match import keys exactly
  const headers = ['student_code', 'full_name'];

  const ws = utils.aoa_to_sheet([headers]);

  // Optional: UX only
  ws['!cols'] = [{ wch: 20 }, { wch: 30 }];

  utils.book_append_sheet(wb, ws, 'Students');

  return Buffer.from(write(wb, { type: 'buffer', bookType: 'xlsx' }));
}
```

---
### Route

```ts
const buffer = generateStudentTemplate();

return new Response(buffer, {
  headers: {
    'Content-Type':
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'Content-Disposition': 'attachment; filename="students_template.xlsx"',
  },
});
```

---
### Frontend

```ts
const handleDownloadTemplate = () => {
  window.open(`/api/v1/subjects/${subjectId}/students/template`, '_blank');
};
```

---
### Key Rules

- Header = contract (must match import keys exactly)
- Do not add/remove columns casually
- Keep template minimal (no formulas, no formatting logic)
- Treat this as schema definition, not UI

