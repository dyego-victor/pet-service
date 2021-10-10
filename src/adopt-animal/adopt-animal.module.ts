import { Module } from '@nestjs/common';
import { AnimalsModule } from 'src/animals/animals.module';
import { AdoptAnimalController } from './adopt-animal.controller';
import { AdoptAnimalService } from './adopt-animal.service';

@Module({
  imports: [AnimalsModule],
  controllers: [AdoptAnimalController],
  providers: [AdoptAnimalService],
})
export class AdoptAnimalModule {}
