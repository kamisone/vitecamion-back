import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { typeormConfig } from './config/typeorm.config';
import { BookingModule } from './entities/booking/booking.module';
import { BookingStatusModule } from './entities/booking-status/booking-status.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: (config) => config,
    }),
    BookingModule,
    BookingStatusModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
