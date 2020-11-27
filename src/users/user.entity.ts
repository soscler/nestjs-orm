import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Photo } from '../photos/photo.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany((type) => Photo, 'author')
  photos: Photo[];
}
