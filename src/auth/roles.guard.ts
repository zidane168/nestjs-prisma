import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core'; 
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private databaseService: DatabaseService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true; // If no roles are defined, allow access
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // User is populated by the JwtStrategy

    const userRoles = await this.databaseService.administratorRole.findMany({
      where: { administratorId: user.id },
      include: { role: true },
    });

    if (!user || !userRoles.some(role => roles.includes(role.role.slug))) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}