import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AdministratorsService } from "src/administrators/administrators.service";
import { DatabaseService } from "src/database/database.service";


@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private readonly administratorService: AdministratorsService,
        private reflector: Reflector
    ) {};

    async canActivate(context: ExecutionContext): Promise<boolean> {

        const [ req ] = context.getArgs()

        // get req.user.id 
        const userPermissions = await this.administratorService.getPermissionByAdminId(req.user.id);

       // const userPermissions = req?.user?.permissions || []
        const requiredPermissions = this.reflector.get('permissions', context.getHandler()) || [];  // get data from metaData on controller setMeta
        // const hasAllPermissions = requiredPermissions.some(p => userPermissions.controller === p.controller && p.action === userPermissions.action)
        const foundPermission = userPermissions.find(p => p.controller === requiredPermissions.controller && p.action === requiredPermissions.action)
  
        if (foundPermission) { //|| hasAllPermissions)  {
            return true;
        }
        
        throw new ForbiddenException('Insufficient permissions');
    }
}