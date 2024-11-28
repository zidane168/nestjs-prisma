// Mục dich lay token và convert nó ra lay userId và để save vào CreatedBy, UpdatedBy

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest(); 

    const userId = request['user']; // Access the user ID from the request object
    console.log(' &&&&&&& $$$$$$$$$$$$$$$$$$ ')
    console.log(userId.id)
    console.log(' &&&&&&& $$$$$$$$$$$$$$$$$$ ')

    return next.handle().pipe(map((data) => {
        // Modify the response if needed
        return data;
      }),
    );
  }
}