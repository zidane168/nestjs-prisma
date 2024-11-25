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

    const hashedPassword = await bcrypt.hash(password, 10);

    // Log the hashed password for debugging (not recommended in production)
    console.log('Hashed password:', hashedPassword);
    // $2b$10$qTNOn.2T4JdWG1S3hbj85uutbfBe68UMumJwFvVGzoTDXmLW3GuEy  
    // $2b$10$sYoCTDKsz9JyJ9IMJcLUIu0gwZPq9ZRcPRfkm6lqQ1TyJZ5gsSwYy$2b$10$5qYdl.CQH5mzOoBsKaDO8uXNVNPRQXnCs/LQg96F93hIrBuGn2hLq

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
    const payload = { id: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
