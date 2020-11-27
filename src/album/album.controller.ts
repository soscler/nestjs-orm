import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AlbumService } from './album.service';
import { Album } from './album.entity';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() album: Album) {
    return this.albumService.create(album);
  }

  @Get()
  findAll() {
    return this.albumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.albumService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() album: Album) {
    return this.albumService.update(+id, album);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumService.remove(+id);
  }
}
