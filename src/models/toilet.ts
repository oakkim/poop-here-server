import {
  PrimaryGeneratedColumn, Column, Entity, ManyToOne,
} from 'typeorm';
import { ToiletType } from './toiletType';
import { RestRoomInfo } from './restRoomInfo';

@Entity()
export class Toilet {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: ToiletType;

  @Column()
  isBroken!: boolean;

  @ManyToOne((type) => RestRoomInfo, (restRoomInfo) => restRoomInfo.toilets)
  restRoomInfo!: RestRoomInfo;
}
