---
created: 2026-02-19
title: Delete cf deployment
tags:
  - cloudflare
---
1. Dowloand [delete-all-deployments.zip](https://pub-505c82ba1c844ba788b97b1ed9415e75.r2.dev/delete-all-deployments.zip)
2. Extract the `delete-all-deployments.zip` file.
3. Open your terminal and `cd` into the `delete-all-deployments` directory.
4. In the `delete-all-deployments` directory, run `npm install` to install dependencies.
5. Review the following commands to decide which deletion you would like to proceed with:
	- To delete all deployments except for the live production deployment (excluding [aliased deployments](https://developers.cloudflare.com/pages/configuration/preview-deployments/#preview-aliases)
```
```



- To delete all deployments except for the live production deployment
```js
CF_API_TOKEN=<YOUR_CF_API_TOKEN> CF_ACCOUNT_ID=<ACCOUNT_ID> CF_PAGES_PROJECT_NAME=<PROJECT_NAME> CF_DELETE_ALIASED_DEPLOYMENTS=true npm start
```