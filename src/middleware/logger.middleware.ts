// src/middleware/logger.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express'; 
import { LogSystemsService } from 'src/log-systems/log-systems.service';
import { ExtendedRequest } from 'src/types/express';
import * as useragent from 'useragent'; 

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logSystemService: LogSystemsService) {}

  async use(req: ExtendedRequest, res: Response, next: NextFunction) {
    const ip = req.ip;

    console.log(' ------log ----- ')
    console.log(req.user)           // call before call the UseGuard, so it dont have any user stored
    console.log(' -------log---- ')
    const userAgent = useragent.parse(req.headers['user-agent'] || '');
    const action = `${req.method} ${req.originalUrl}`;

    await this.logSystemService.createLog({
      action,
      ip,
      browser: userAgent.toString(),
      method: req.method,
      url: req.originalUrl,
      // createdBy: req.user.id
    });

    next();
  }
}
