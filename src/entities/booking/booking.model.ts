import { BookingStatusModel } from '../booking-status/booking-status.model';
import { BaseModel } from '../shared/base.model';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum BookStatus {
  AVAILABLE = 'available',
  BOOKED = 'booked',
}

@Entity('booking')
export class BookingModel extends BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: number;

  @Column()
  month: number;

  @Column()
  date: number;

  @Column({ name: 'start_hour' })
  startHour: number;

  @Column({ name: 'start_minute' })
  startMinute: number;

  @Column({ name: 'end_hour' })
  endHour: number;

  @Column({ name: 'end_minute' })
  endMinute: number;

  @Column({ name: 'user_name', nullable: true })
  userName: string;

  @Column({ name: 'user_phone', nullable: true })
  userPhone: string;

  @Column({ name: 'user_address', nullable: true })
  userAddress: string;

  @Column({ default: BookStatus.AVAILABLE })
  status: BookStatus;
}
