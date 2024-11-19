import { Module } from '@nestjs/common';
import { OltController } from './olt.controller';
import { OltService } from './olt.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Olt } from './olt.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Olt])],
  controllers: [OltController],
  providers: [OltService]
})
export class OltModule {}
