import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dtos/create-dto';
import { UpdateBookingDto } from './dtos/update-dto';

export interface QueryOptions {
  year?: number;
  month?: number;
  date?: number;
}

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  list(@Query() queryOptions: QueryOptions) {
    console.log('list booking');
    return this.bookingService.list(queryOptions);
  }

  @Post()
  create(@Body() data: CreateBookingDto) {
    console.log('creating booking');
    return this.bookingService.create(data);
  }


  @Put()
  update(@Body() data: UpdateBookingDto) {
    
  }
}
