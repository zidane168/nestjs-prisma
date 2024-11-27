import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AdministratorsService } from 'src/administrators/administrators.service';
import { RolesService } from 'src/roles/roles.service';
import { AdministratorTokensService } from 'src/administrator-tokens/administrator-tokens.service';

@Module({
  imports: [
    
    DatabaseModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'fallbackSecretKey',
      signOptions: { expiresIn: '20h' }, // Set expiration time as needed
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, AdministratorsService, RolesService, AdministratorTokensService],  //Them localStrategy để dieu huong nè
})
export class AuthModule {}
