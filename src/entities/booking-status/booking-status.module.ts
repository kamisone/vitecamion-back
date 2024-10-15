import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingStatusController } from './booking-status.controller';
import { BookingStatusService } from './booking-status.service';
import { BookingStatusModel } from './booking-status.model';

@Module({
  imports: [TypeOrmModule.forFeature([BookingStatusModel])],
  controllers: [BookingStatusController],
  providers: [BookingStatusService],
  exports: [BookingStatusService],
})
export class BookingStatusModule {}
