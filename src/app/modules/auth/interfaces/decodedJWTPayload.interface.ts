import { Employee } from "../models/role.model";

export interface JwtPayload {
    id?: string;
    email?: string;
    role?: Employee;
    iat?: number;
    exp?: number;
}