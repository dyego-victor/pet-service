import { Test, TestingModule } from '@nestjs/testing';
import { AdoptAnimalController } from './adopt-animal.controller';

describe('AdoptAnimalController', () => {
  let controller: AdoptAnimalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdoptAnimalController],
    }).compile();

    controller = module.get<AdoptAnimalController>(AdoptAnimalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
