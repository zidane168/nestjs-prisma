import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit{ 

    async onModuleInit() {
        await this.$connect()
    } 
    get logSystem() {  
        return this._logSystem; 
    } 
    
    set logSystem(value: any) { 
        this._logSystem = value; 
    } 
    
    private _logSystem: any
}
