import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'
import { AdministratorTokensService } from 'src/administrator-tokens/administrator-tokens.service';
import { addHours } from 'date-fns'
@Injectable()
export class AuthService {
  constructor(
    
    private readonly administratorTokenService: AdministratorTokensService,
    private databaseService: DatabaseService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string) {
    const user = await this.databaseService.administrator.findUnique({ where: { email } });

    // const hashedPassword = await bcrypt.hash(password, 10);

    // // Log the hashed password for debugging (not recommended in production)
    // console.log('Hashed password:', hashedPassword); 
    console.log(user.password)

    if (user && (await bcrypt.compare(password, user.password))) { 
      return user;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    if (!user) {
      throw new Error('Invalid credentials');
    } 

    // get permissions by user id 
    // const payload = { id: user.id, email: user.email, permissions: permissions };
    const payload = { id: user.id, email: user.email };

    let access_token = this.jwtService.sign(payload) 

    let hour = Number(process.env.EXP)

    // save it on AdministratorToken Table
    let _data = {
      administratorId: user.id,
      token: access_token,
      exp: new Date(new Date().getTime() + hour * 60 * 60 * 1000),
    };

    console.log(' ------- ')
    console.log(_data) 
    console.log(' ------- ')

    await this.administratorTokenService.create(_data)

    return {
      access_token: access_token
    };
  }
 
}
