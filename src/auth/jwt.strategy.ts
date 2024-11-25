// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt'; 
// import { DatabaseService } from 'src/database/database.service';

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private databaseService: DatabaseService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWT_SECRET || 'fallbackSecretKey',
//     });

//     console.log (" process.env.JWT_SECRET  = " +  process.env.JWT_SECRET )
//   }

//   async validate(payload: any) {
//     const user = await this.databaseService.administrator.findUnique({ where: { id: payload.id } });
//     return user; // Return the user object
//   }
// }