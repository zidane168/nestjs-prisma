import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpException, UnauthorizedException, Req, SetMetadata   } from '@nestjs/common';
import { AuthService } from './auth.service'; 
import { LocalGuard } from './guards/local.guard';   
import { JwtAuthGuard } from './guards/jwt.guard';
import { Request } from 'express'
import { PermissionGuard } from './guards/permission.guard';
import { ACTION, PERMISSION } from 'src/lib/enum';
import { ApiBearerAuth, ApiCreatedResponse, ApiProperty, ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from './dto/create-auth.dto'; 
import { ExtendedRequest } from 'src/types/express';

// @ApiTags('CMS')
@ApiBearerAuth('accessToken') // chỗ nào cần xài cái Authorize trong các api phải define mỗi cái ở đây!!!
@Controller('auth')
export class AuthController {
  constructor( 
    private readonly authService: AuthService) {}

  @Post('login')
  @ApiCreatedResponse({ type: CreateAuthDto })
  @UseGuards(LocalGuard) 
  async login( @Body() body: CreateAuthDto) { 
    
    const user = await this.authService.validateUser(body.email, body.password);
    console.log('Request Body:', body.email, body.password) 
    if (!user) {
      throw new UnauthorizedException()
    }

    return this.authService.login(body.email, body.password); 
  }


  private getUserIdFromRequest(@Req() req: ExtendedRequest): string { // cách sử dụng type khác, quá hay, tuyệt vời - ExtendedRequest
    const user  = req.user; // Adjust the property name as needed

    const userId = user?.id; 
    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    return user?.id;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard, PermissionGuard)    // just use this line for need a bearer token  
  @SetMetadata('permissions', { "controller": PERMISSION.POST, "action": ACTION.ADD } )
  status (@Req() req: ExtendedRequest) {
    const userId = this.getUserIdFromRequest(req);
    console.log('User ID:' + userId);
    console.log(' ------------ ************ ---------------');
    console.log('Inside AuthController/status method')  
  }
 
}
