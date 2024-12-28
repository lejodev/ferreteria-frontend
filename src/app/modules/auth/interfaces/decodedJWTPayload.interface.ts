import { RoleType } from "../models/role.model";

export interface JwtPayload {
    id?: string;
    email?: string;
    role?: RoleType;
    iat?: number;
    exp?: number;
}