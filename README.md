# install nestjs 
npm i -g @nestjs/cli
nest new nestjs-prisma

# install prisma
npm i prisma -D
npx prisma init

# init database
npx prisma migrate dev --name init 

# when you change something on the schema.prisma file (change structure)
npx prisma generate

# when u change something
npx prisma migrate dev --name name_change

# create a module database
nest g module database

# create a service database
nest g service database

# create rest API quickly
nest g resource employees


# JWT
strategies 

guards 
controller 
@Get('status')
@UseGuards(JwtAuthGuard)    // just use this line for need a bearer token
status (@Req() req: Request) {
    console.log('Inside AuthController/status method')
    console.log(req.user)
}

--> trigger JwtAuthGuard (from guards/local.guard.ts) 
export class JwtAuthGuard extends AuthGuard('jwt') {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> { 

        console.log('Inside JwtAuthGuard canActivate');     
        return super.canActivate(context)
    }  
}

--> trigger strategies/jwt.strategy.ts
because on the provider we have this line
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'fallbackSecretKey',
      signOptions: { expiresIn: '1h' }, // Set expiration time as needed
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],  //add localStrategy, JwtStrategy to trigger when apply guards
})
export class AuthModule {}

// the passport-local (username, password)
// the passport-jwt (check the bearer token (header) from  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() and the key MUST map with when u register as module
   JwtModule.register({
      secret: process.env.JWT_SECRET || 'fallbackSecretKey',
      signOptions: { expiresIn: '1h' }, // Set expiration time as needed
    }),)
 
 ### the issue cannot trigger passport-local, passport-jwt the one of reason is 
- the params passing not correct
- missing params or wrong param name (passport-local: param: username, password), (passport-jwt: param is header authorization: bearer token)
