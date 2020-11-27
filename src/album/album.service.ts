import { Injectable } from '@nestjs/common';
import { Album } from './album.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private readonly albumRepository: Repository<Album>,
  ) {}

  create(album: Album): Promise<Album> {
    return this.albumRepository.save(album);
  }

  findAll(): Promise<Album[]> {
    return this.albumRepository.find({ relations: ['photos'] });
  }

  findOne(id: number): Promise<Album> {
    return this.albumRepository.findOne({ id });
  }

  update(id: number, album: Album): Promise<UpdateResult> {
    return this.albumRepository.update({ id }, album);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.albumRepository.delete({ id });
  }
}
