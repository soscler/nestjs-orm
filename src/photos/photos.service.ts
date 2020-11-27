import { Injectable } from '@nestjs/common';
import { Photo } from './photo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PhotosService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  create(photo: Photo): Promise<Photo> {
    return this.photoRepository.save(photo);
  }

  findAll(): Promise<Photo[]> {
    return this.photoRepository.find({ relations: ['metadata', 'author'] });
  }

  findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOne({ id });
  }

  update(id: number, photo: Photo): Promise<UpdateResult> {
    return this.photoRepository.update({ id }, photo);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.photoRepository.delete({ id });
  }
}
