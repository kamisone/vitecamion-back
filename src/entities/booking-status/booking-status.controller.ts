import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingStatusService } from './booking-status.service';
import { BookStatus } from './booking-status.model';

@Controller('booking-status')
export class BookingStatusController {
  constructor(private bookingStatusService: BookingStatusService) {}
  @Get()
  list() {
    return this.bookingStatusService.list();
  }

  @Post()
  create(@Body() data: { name: BookStatus }) {
    return this.bookingStatusService.create(data);
  }
}
