import { Test, TestingModule } from '@nestjs/testing';
import { PhotoMetadataController } from './photo-metadata.controller';
import { PhotoMetadataService } from './photo-metadata.service';

describe('PhotoMetadataController', () => {
  let controller: PhotoMetadataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotoMetadataController],
      providers: [PhotoMetadataService],
    }).compile();

    controller = module.get<PhotoMetadataController>(PhotoMetadataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
