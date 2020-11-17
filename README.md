# octopus-keycloakjs-admin

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/octopus-keycloakjs-admin.svg?style=flat-square
[npm-url]: http://npmjs.org/package/octopus-keycloakjs-admin
[download-image]: https://img.shields.io/npm/dm/octopus-keycloakjs-admin.svg?style=flat-square
[download-url]: https://npmjs.org/package/octopus-keycloakjs-admin

## Features

```
- Define admin tool for keycloak from BE integrate
- Define user managements API
```

## How it work

#### Basic using

- User management:

```
import { UserManagement } from "octopus-keycloakjs-admin";

const userManagement = new UserManagement();

userManagement.createUser(clientConfig, userInfo);

```
