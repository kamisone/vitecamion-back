import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { QueryOptions } from './booking.controller';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingModel } from './booking.model';
import { Repository } from 'typeorm';
import { query } from 'express';
import { CreateBookingDto } from './dtos/create-dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingModel)
    private bookingRepository: Repository<BookingModel>,
  ) {}

  list(queryOptions: QueryOptions) {
    return this.bookingRepository.find({ where: queryOptions });
  }

  async create(data: CreateBookingDto) {
    const found = await this.bookingRepository.findOne({ where: data });

    if (found) {
      throw new HttpException('booking already exists', HttpStatus.BAD_REQUEST);
    }

    

    return this.bookingRepository.save(data);
  }
}
