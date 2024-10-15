import { BookingModel } from '../booking/booking.model';
import { BaseModel } from '../shared/base.model';

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum BookStatus {
  AVAILABLE = 'available',
  BOOKED = 'booked',
}

@Entity('booking_status')
export class BookingStatusModel extends BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: BookStatus })
  name: string;

  @OneToMany(() => BookingModel, (booking) => booking.status)
  bookings: BookingModel[] | null;
}
