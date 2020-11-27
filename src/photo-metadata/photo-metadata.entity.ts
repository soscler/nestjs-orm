import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Photo } from '../photos/photo.entity';

@Entity()
export class PhotoMetadata {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  camera: string;

  @OneToOne((type) => Photo)
  @JoinColumn()
  photo: Photo;
}
