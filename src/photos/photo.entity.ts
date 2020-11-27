import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PhotoMetadata } from '../photo-metadata/photo-metadata.entity';
import { User } from '../users/user.entity';
import { Album } from '../album/album.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne((type) => User, {
    nullable: false,
  })
  @JoinColumn()
  author: User;

  @OneToOne((type) => PhotoMetadata, (photoMetadata) => photoMetadata.photo, {})
  metadata: PhotoMetadata;

  @ManyToMany((type) => Album, (album) => album.photos)
  album: Album[];
}
