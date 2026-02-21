---
created: 2026-02-19
title: Delete cf deployment
tags:
  - sapling
---
1. Dowloand [delete-all-deployments.zip](https://pub-505c82ba1c844ba788b97b1ed9415e75.r2.dev/delete-all-deployments.zip)
2. Extract the `delete-all-deployments.zip` file.
3. Open your terminal and `cd` into the `delete-all-deployments` directory.
4. In the `delete-all-deployments` directory, run `npm install` to install dependencies.
5. To delete all deployments except for the live production deployment
```js
CF_API_TOKEN=<YOUR_CF_API_TOKEN> CF_ACCOUNT_ID=<ACCOUNT_ID> CF_PAGES_PROJECT_NAME=<PROJECT_NAME> CF_DELETE_ALIASED_DEPLOYMENTS=true npm start
```

- CF_API_TOKEN https://dash.cloudflare.com/ee09391f4ca9100bc4bdaf41b137f879/api-tokens (Permission Edit CF Pages)
- CF_ACCOUNT_ID (Search for `Copy accout ID` in home page) 
- CF_PAGES_PROJECT_NAME (Name of your project)


