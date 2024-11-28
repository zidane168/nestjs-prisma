import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { setTimezoneMiddleware } from 'src/middleware/set-timezone.middleware';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{ 
    constructor() { 
        super({ 
            log: ['query', 'info', 'warn', 'error'], 
            // Enable detailed logging 
        });

        this.$use(setTimezoneMiddleware());
    } 

    async onModuleInit() {
        await this.$connect()
    } 
    get logSystem() {  
        return this._logSystem; 
    } 
    
    set logSystem(value: any) { 
        this._logSystem = value; 
    } 

    get administratorToken() {
        return this.administratorToken
    }

    set administratorToken(value: any) {
        this._administratorToken = value;
    }
    
    private _logSystem: any
    private _administratorToken: any
}
