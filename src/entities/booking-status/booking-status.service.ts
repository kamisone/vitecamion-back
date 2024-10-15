import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingStatusModel, BookStatus } from './booking-status.model';
import { Repository } from 'typeorm';

@Injectable()
export class BookingStatusService {
  constructor(
    @InjectRepository(BookingStatusModel)
    private bookingStatusReponsitory: Repository<BookingStatusModel>,
  ) {}

  list() {
    return this.bookingStatusReponsitory.find();
  }

  create(data: { name: BookStatus }) {
    return this.bookingStatusReponsitory.save(data);
  }
}
