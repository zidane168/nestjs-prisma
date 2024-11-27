import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'; 
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from  'passport-local'
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';

// https://www.bing.com/videos/riverview/relatedvideo?&q=Nest+JS+JWT+Authentication&&mid=D6BBC2D7AD602E62B5CBD6BBC2D7AD602E62B5CB&&FORM=VRDGAR
@Injectable()
//export class LocalStrategy extends PassportStrategy(Strategy, 'local') {

export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });  
    // phải dùng username, nếu ko thì phải maping nhu vay, ten mac dinh là username, password thì nó mới đi đúng flow  
  }

  async validate(email: string, password: string) { // no trigger
    console.log('Inside LocalStrategy!')
    const user = await this.authService.validateUser( email, password )
    console.log( '---------- ') 
    console.log(email)
    console.log(password) 
    console.log( '---------- ')
    if (!user)  { 
        throw new UnauthorizedException()
    }

    return user; 
  }
}

 