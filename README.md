<p align="center">

  <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg">
  <br>

  <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-official.svg">
</p>

<p align="center">

  <a href="https://github.com/kerolloz/ts-node-express/issues">
    <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat">
  </a>

  <a href="http://hits.dwyl.io/kerolloz/ts-node-express">
    <img src="http://hits.dwyl.io/kerolloz/ts-node-express.svg">
  </a>

  <a href="https://travis-ci.com/kerolloz/ts-node-express">
    <img src="https://travis-ci.com/kerolloz/ts-node-express.svg?branch=master">
  </a>

</p>

# Description

This is a template repository for projects written in TypeScript for node using express.js framework.
Included some important packages:

- express
- express-bearer-token
- **mongoose**
- **cors**
- **dotenv**
- colors
- **helmet**
- **morgan**
- source-map-support

# Usage

Click `Use this template` button
<a class="btn btn-sm btn-primary ml-2" href="https://github.com/kerolloz/ts-node-express/generate">Use this template</a>

# Structure

```tree

├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config.ts
│   ├── controllers
│   ├── database.ts
│   ├── index.ts
│   ├── middlewares
│   │   ├── errorHandler.ts
│   │   └── index.ts
│   ├── models
│   ├── routes
│   │   └── index.ts
│   ├── server.ts
│   ├── services
│   └── utils
│       ├── APIResponse.ts
│       ├── enumToArray.ts
│       ├── index.ts
│       └── paginationOptions.ts
├── test
│   └── app.test.js
├── tsconfig.json
└── tslint.json
```
