import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
 private readonly redis: Redis;

 constructor(private configService: ConfigService) {
   this.redis = new Redis({
     host: this.configService.get('REDIS_HOST'),
     port: this.configService.get('REDIS_PORT'),
   });
 }

 async set(key: string, value: any): Promise<void> {
   await this.redis.set(key, JSON.stringify(value));
 }

 async get(key: string): Promise<any> {
   const data = await this.redis.get(key);
   return data ? JSON.parse(data) : null;
 }

 onModuleDestroy() {
   this.redis.disconnect();
 }
}
