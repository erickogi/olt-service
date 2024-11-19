import { Injectable } from '@nestjs/common';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class OltService {
  constructor(private redisService: RedisService) {}

  async create(olt: any) {
    const key = `olt:${olt.OLT_ID}`;
    await this.redisService.set(key, olt);
    return olt;
  }
}