import KcAdminClient from "keycloak-admin";
import UserRepresentation from "keycloak-admin/lib/defs/userRepresentation";

import { createAdminClient } from "./core";
import { ClientSetting, UserInfo } from "./types";

export class UserManagement {
  private _adminClient: KcAdminClient;

  constructor(adminClient?: KcAdminClient) {
    if (adminClient == null) {
      createAdminClient().then((client) => {
        this._adminClient = client;
      });
    } else {
      this._adminClient = adminClient;
    }
  }

  listUsers(): Promise<UserInfo[]> {
    return this._adminClient.users.find().then((users) => {
      return users as UserInfo[];
    });
  }

  async createUser(clientOptions: ClientSetting, model: UserInfo) {
    // add realm user
    const user = await this._adminClient.users.create({
      realm: clientOptions.realm,
      ...model,
    });

    // get matching roles
    // roles has been declare into realms and roles has been request for user
    const allRoles = await this._adminClient.clients.listRoles({
      realm: clientOptions.realm,
      id: clientOptions.clientId,
    });
    const matchingRoles = allRoles
      .filter((r) => {
        return model.roleNames.some((m) => m === r.name.toLowerCase());
      })
      .map((r) => {
        return { id: r.id, name: r.name };
      });

    // add realm roles mapping for user
    return this._adminClient.users.addClientRoleMappings({
      id: user.id,
      realm: clientOptions.realm,
      clientUniqueId: clientOptions.clientId,
      roles: matchingRoles,
    });
  }

  deleteUser(clientOptions: ClientSetting, userId: string) {
    return this._adminClient.users.del({
      realm: clientOptions.realm,
      id: userId,
    });
  }
}
