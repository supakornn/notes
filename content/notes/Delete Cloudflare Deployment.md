---
created: 2026-02-19
title: Delete Cloudflare Deployment
tags:
  - seed
---
Delete all deployments except the live production deployment.

## Steps

1. Download script  
    [https://pub-505c82ba1c844ba788b97b1ed9415e75.r2.dev/delete-all-deployments.zip](https://pub-505c82ba1c844ba788b97b1ed9415e75.r2.dev/delete-all-deployments.zip)
2. Extract
3. Open terminal and navigate:

```
cd delete-all-deployments
```

4. Install dependencies:

```shell
npm install
```

5. Run script:

```shell
CF_API_TOKEN=<YOUR_CF_API_TOKEN> \  
CF_ACCOUNT_ID=<ACCOUNT_ID> \  
CF_PAGES_PROJECT_NAME=<PROJECT_NAME> \  
CF_DELETE_ALIASED_DEPLOYMENTS=true \  
npm start
```

---

## Required Variables

- **CF_API_TOKEN**  
    https://dash.cloudflare.com/api-tokens
    - Permission: _Edit Cloudflare Pages_
- **CF_ACCOUNT_ID**
    - Copy from Cloudflare dashboard (home page)
- **CF_PAGES_PROJECT_NAME**
    - Your Pages project name

---

## Notes

- `CF_DELETE_ALIASED_DEPLOYMENTS=true`  
    → also deletes deployments with custom domains / aliases
- Production deployment is preserved by default