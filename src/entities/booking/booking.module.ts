import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingModel } from './booking.model';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';
import { BookingStatusModule } from '../booking-status/booking-status.module';

@Module({
  imports: [TypeOrmModule.forFeature([BookingModel])],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService],
})
export class BookingModule {}
