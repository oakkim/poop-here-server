import {
  Entity, Column, PrimaryGeneratedColumn, ManyToOne,
} from 'typeorm';
import { RestRoomType } from './restRoomType';
import { RestRoom } from './restRoom';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('enum', { enum: RestRoomType })
  type!: RestRoomType;

  @Column()
  title!: string;

  @Column()
  content!: string;

  @Column('double')
  stars!: number;

  // @Column()
  // images!: string[];

  @ManyToOne((type) => RestRoom, (restRoom) => restRoom.reviews)
  restRoom!: RestRoom;
}
