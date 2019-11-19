import {
  Column, Entity, PrimaryGeneratedColumn, ManyToOne,
} from 'typeorm';
import { RestRoomInfo } from './restRoomInfo';

@Entity()
export class Fee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fee!: number;

  @Column()
  reason!: string;

  @ManyToOne((type) => RestRoomInfo, (restRoomInfo) => restRoomInfo.fees)
  restRoomInfo!: RestRoomInfo;
}
