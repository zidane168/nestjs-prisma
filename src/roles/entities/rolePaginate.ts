import { Role } from "./role.entity";

export class RolePaginate  {
    roles: Role[]
    totalPages: number;
    total: number;
    currentPage: number;
}