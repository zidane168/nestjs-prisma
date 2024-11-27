import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"; 
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from "../auth.service";
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
 
    constructor( private authService: AuthService ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),       // bỏ vào Headers (trong postman) nha (tham số cần ghi nhó)
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'fallbackSecretKey',     // phai dung key voi lai trong auth.module nua nha            
        })
    }
 
    async validate(payload: any, req: Request) { 
      console.log('-------------------- Inside JWT Strategy validate! ------------------ ')
      console.log(payload); 
      console.log('-------------------- Inside JWT Strategy validate! ------------------ ') 

      return payload
    }
}