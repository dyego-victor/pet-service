import { Test, TestingModule } from '@nestjs/testing';
import { AdoptAnimalService } from './adopt-animal.service';

describe('AdoptAnimalService', () => {
  let service: AdoptAnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdoptAnimalService],
    }).compile();

    service = module.get<AdoptAnimalService>(AdoptAnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
