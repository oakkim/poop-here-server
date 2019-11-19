import {
  Entity, Column, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { RestRoomType } from './restRoomType';
import { Toilet } from './toilet';
import { Fee } from './fee';
import { RestRoom } from './restRoom';

@Entity()
export class RestRoomInfo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('enum', { enum: RestRoomType })
  type!: RestRoomType;

  @OneToMany((type) => Toilet, (toilet) => toilet.restRoomInfo)
  toilets!: Toilet[];

  @OneToMany((type) => Fee, (fee) => fee.restRoomInfo)
  fees!: Fee[];

  @ManyToOne((type) => RestRoom, (restRoom) => restRoom.infos)
  restRoom!: RestRoom;
}
