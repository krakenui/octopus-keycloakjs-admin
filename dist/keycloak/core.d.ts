import KcAdminClient from "keycloak-admin";
import ClientRepresentation from "keycloak-admin/lib/defs/clientRepresentation";
export declare function createAdminClient(): Promise<KcAdminClient>;
export declare function getClient(adminClient: KcAdminClient, realm: string, clientId: string): Promise<ClientRepresentation>;
