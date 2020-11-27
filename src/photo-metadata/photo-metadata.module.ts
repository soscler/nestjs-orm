import { Module } from '@nestjs/common';
import { PhotoMetadataService } from './photo-metadata.service';
import { PhotoMetadataController } from './photo-metadata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoMetadata } from './photo-metadata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PhotoMetadata])],
  controllers: [PhotoMetadataController],
  providers: [PhotoMetadataService],
  exports: [TypeOrmModule, PhotoMetadataService],
})
export class PhotoMetadataModule {}
