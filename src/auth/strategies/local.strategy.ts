import { Injectable, UnauthorizedException } from '@nestjs/common'; 
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

// https://www.bing.com/videos/riverview/relatedvideo?&q=Nest+JS+JWT+Authentication&&mid=D6BBC2D7AD602E62B5CBD6BBC2D7AD602E62B5CB&&FORM=VRDGAR
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super() 
  }

  async validate(email: string, password: string) {
    console.log('Inside LocalStrategy!')
    const user = await this.authService.validateUser( email, password )
    if (!user)  { 
        throw new UnauthorizedException()
    }

    return user; 
  }
}