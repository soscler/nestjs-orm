import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PhotoMetadataService } from './photo-metadata.service';
import { PhotoMetadata } from './photo-metadata.entity';

@Controller('photo-metadata')
export class PhotoMetadataController {
  constructor(private readonly photoMetadataService: PhotoMetadataService) {}

  @Post()
  create(@Body() photoMetadata: PhotoMetadata) {
    return this.photoMetadataService.create(photoMetadata);
  }

  @Get()
  findAll() {
    return this.photoMetadataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoMetadataService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() photoMetadata: PhotoMetadata) {
    return this.photoMetadataService.update(+id, photoMetadata);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoMetadataService.remove(+id);
  }
}
