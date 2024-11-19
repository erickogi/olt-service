import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OltModule } from './olt/olt.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'oracle',
    //     connectString: configService.get('DB_CONNECT_STRING'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //     synchronize: false,
    //   }),
    //   inject: [ConfigService],
    // }),
    OltModule,
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}