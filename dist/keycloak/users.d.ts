import KcAdminClient from "keycloak-admin";
import { ClientSetting, UserInfo } from "./types";
export declare class UserManagement {
    private _adminClient;
    constructor(adminClient?: KcAdminClient);
    listUsers(): Promise<UserInfo[]>;
    createUser(clientOptions: ClientSetting, model: UserInfo): Promise<void>;
    deleteUser(clientOptions: ClientSetting, userId: string): Promise<void>;
}
