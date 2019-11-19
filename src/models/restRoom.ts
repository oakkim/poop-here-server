import {
  Entity, Column, PrimaryGeneratedColumn, OneToMany, BaseEntity,
} from 'typeorm';
import { Review } from './review';
import { RestRoomInfo } from './restRoomInfo';

@Entity()
export class RestRoom extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  address!: string;

  @Column()
  name!: string;

  @OneToMany((type) => Review, (review) => review.restRoom)
  reviews!: Review[];

  @Column('double')
  stars!: number;

  @Column()
  isPublic: boolean = false;

  @OneToMany((type) => RestRoomInfo, (restRoomInfo) => restRoomInfo.restRoom)
  infos!: RestRoomInfo[];
}
