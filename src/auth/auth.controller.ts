import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, UnauthorizedException, Req   } from '@nestjs/common';
import { AuthService } from './auth.service'; 
import { LocalGuard } from './guards/local.guard';   
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express'

@Controller('auth')
export class AuthController {
  constructor( 
    private readonly authService: AuthService) {}
  

  @Post('login')
  @UseGuards(LocalGuard) 
  async login( @Body() body: { email: string; password: string }) { 
   
    console.log(' -=-=--=-=-=-== ')
    const user = await this.authService.validateUser(body.email, body.password);
    console.log('Request Body:', body.email, body.password) 
    if (!user) {
      throw new UnauthorizedException()
    }

    return this.authService.login(body.email, body.password);

  }

  @Get('status')
  @UseGuards(JwtAuthGuard)    // just use this line for need a bearer token
  status (@Req() req: Request) {
    console.log('Inside AuthController/status method')
    console.log(req.user)
  }

   // @UseGuards(AuthGuard('local'))  // dùng thu muc strategies/local.strategy.ts điều huong sang 401
  // @UseGuards()
}
