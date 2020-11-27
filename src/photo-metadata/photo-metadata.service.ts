import { Injectable } from '@nestjs/common';
import { PhotoMetadata } from './photo-metadata.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PhotoMetadataService {
  constructor(
    @InjectRepository(PhotoMetadata)
    private readonly photoMetadataService: Repository<PhotoMetadata>,
  ) {}

  create(photoMetadata: PhotoMetadata): Promise<PhotoMetadata> {
    return this.photoMetadataService.save(photoMetadata);
  }

  findAll(): Promise<PhotoMetadata[]> {
    return this.photoMetadataService.find({ relations: ['photos'] });
  }

  findOne(id: number): Promise<PhotoMetadata> {
    return this.photoMetadataService.findOne({ id });
  }

  update(id: number, photoMetadata: PhotoMetadata): Promise<UpdateResult> {
    return this.photoMetadataService.update({ id }, photoMetadata);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.photoMetadataService.delete({ id });
  }
}
