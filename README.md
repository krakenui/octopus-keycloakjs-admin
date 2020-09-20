# krc-keycloak-admin

## Features

```
- Define admin tool for keycloak from BE integrate
- Define user managements API
```

## Install

- Install krc-keycloak-admin

```
npm install krc-keycloak-admin
```

## How it work

#### Basic using

- User management:

```
import { UserManagement } from "krc-keycloak-admin";

const userManagement = new UserManagement();

userManagement.createUser(clientConfig, userInfo);

```
