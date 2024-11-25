import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, UnauthorizedException, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { LocalStrategy } from './strategies/local.strategy';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor( 
    private readonly authService: AuthService) {}
  
   

  @Post('login')
  @UseGuards(LocalGuard)
  // @UseGuards(AuthGuard('local'))  // dùng local strategy deu dieu huong sang 401
  // @UseGuards()
  async login(@Body() body: { email: string; password: string }) { 
    console.log('login')
    const user = await this.authService.validateUser(body.email, body.password);
    console.log('Request Body:', body.email, body.password) 
    if (!user) {
      throw new UnauthorizedException()
    }

    return user;


  }
}
