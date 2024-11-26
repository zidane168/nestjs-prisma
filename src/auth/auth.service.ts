import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private databaseService: DatabaseService, private jwtService: JwtService) {}

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

    // let permissions: any = [
    //     { "controller": "post", "action": "add" },
    //     { "controller": "post", "action": "edit" },
    //     { "controller": "post", "action": "delete" },
    //     { "controller": "post", "action": "view" },

    //     { "controller": "setting", "action": "add" },
    //     { "controller": "setting", "action": "edit" },
    //     { "controller": "setting", "action": "delete" },
    //     { "controller": "setting", "action": "view" },
    // ];

    // get permissions by user id 
    // const payload = { id: user.id, email: user.email, permissions: permissions };
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
 
}
