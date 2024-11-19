import { Controller, Post, Body, HttpStatus, HttpCode, HttpException } from '@nestjs/common';
import { OltService } from './olt.service';
import { Olt } from './olt.entity';

@Controller('api/olt')
export class OltController {
  constructor(private oltService: OltService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() olt: Olt) {
    try {
      const result = await this.oltService.create(olt);
      return {
        statusCode: HttpStatus.CREATED,
        message: 'OLT created successfully',
        data: result
      };
    } catch (error) {
      throw new HttpException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: error.message,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}