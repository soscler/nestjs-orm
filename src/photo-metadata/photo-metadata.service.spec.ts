import { Test, TestingModule } from '@nestjs/testing';
import { PhotoMetadataService } from './photo-metadata.service';

describe('PhotoMetadataService', () => {
  let service: PhotoMetadataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhotoMetadataService],
    }).compile();

    service = module.get<PhotoMetadataService>(PhotoMetadataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
