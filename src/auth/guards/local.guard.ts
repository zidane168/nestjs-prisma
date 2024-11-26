import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
 
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> { 

    console.log('Inside LocalGuard');   
    return super.canActivate(context)
  } 
  
}
