import UserRepresentation from "keycloak-admin/lib/defs/userRepresentation";

export interface ClientSetting {
  realm: string;
  clientId: string;
}

export interface UserInfo extends UserRepresentation {
  roleNames: string[];
}
