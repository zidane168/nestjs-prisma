import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable  } from "rxjs";

@Injectable() 
export class LocalGuard extends AuthGuard('local') {
    canActivate (       // viet sai chinh ta
        context: ExecutionContext, 
    ): boolean | Promise<boolean> | Observable<boolean> {

        console.log('Inside local guard!!!')
        
        // return false;   // forbidden
        return super.canActivate( context )
    }
}