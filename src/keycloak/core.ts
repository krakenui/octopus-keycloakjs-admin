import KcAdminClient from "keycloak-admin";
import ClientRepresentation from "keycloak-admin/lib/defs/clientRepresentation";

import {
  SSO_ADMIN_AUTH_ACCESS_KEY,
  SSO_ADMIN_AUTH_REALM,
  SSO_ADMIN_AUTH_SECRET_KEY,
  SSO_ADMIN_AUTH_URL,
} from "../common";

export async function createAdminClient(): Promise<KcAdminClient> {
  const kcAdminClient = new KcAdminClient({
    baseUrl: SSO_ADMIN_AUTH_URL,
    realmName: SSO_ADMIN_AUTH_REALM,
  });

  await kcAdminClient.auth({
    username: SSO_ADMIN_AUTH_ACCESS_KEY,
    password: SSO_ADMIN_AUTH_SECRET_KEY,
    grantType: "password",
    clientId: "admin-cli",
  });

  return kcAdminClient;
}

export function getClient(adminClient: KcAdminClient, realm: string, clientId: string): Promise<ClientRepresentation> {
  return adminClient.clients
    .find({
      clientId: clientId,
      realm: realm,
    })
    .then((clients) => {
      if (clients.length > 0) {
        return clients[0];
      }

      return null;
    });
}
