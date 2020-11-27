import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Photo, (photo) => photo.album, {
    nullable: false,
  })
  @JoinTable({
    name: 'album_photos',
  })
  photos: Photo[];
}
