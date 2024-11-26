import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"; 
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),       // bỏ vào Headers (trong postman) nha (tham số cần ghi nhó)
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET || 'fallbackSecretKey',     // phai dung key voi lai trong auth.module nua nha
        })
    }
 
    async validate(payload: any) { 
      console.log('Inside JWT Strategy validate!!!')
      console.log(payload)
      return payload
    }
}