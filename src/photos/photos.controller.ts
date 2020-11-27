import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './photo.entity';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  @Post()
  create(@Body() photo: Photo) {
    return this.photosService.create(photo);
  }

  @Get()
  findAll() {
    return this.photosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() photo: Photo) {
    return this.photosService.update(+id, photo);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photosService.remove(+id);
  }
}
