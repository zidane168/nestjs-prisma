import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class   
 AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];

      console.log('token---->')
      console.log( token )

      try {
        const decoded = await this.jwtService.verifyAsync(token);
        req['user'] = decoded.userId; // Add user ID to the request object
        next();

      } catch (err) {
        // Handle token verification error
        next(err);
      }
    } else {
      // Handle unauthorized requests
      next();
    }
  }
}