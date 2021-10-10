import { ConflictException, Injectable } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { AnimalsRepository } from './animals.repository';
import { CreateAnimalDTO } from './dtos/create-animal.dto';
import { UpdateAnimalDTO } from './dtos/update-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(private animalsRepository: AnimalsRepository) {}

  getAllAnimals() {
    return this.animalsRepository.getAllAnimals();
  }

  getAnimalsByPk(id) {
    return this.animalsRepository.getAnimalsByPk(id);
  }

  getAllByUser(user: User) {
    return this.animalsRepository.find({ user });
  }

  createAnimals(createAnimalDTO: CreateAnimalDTO) {
    return this.animalsRepository.createAnimals(createAnimalDTO);
  }

  updateAnimals(id, updateAnimalDTO: UpdateAnimalDTO) {
    return this.animalsRepository.updateAnimals(id, updateAnimalDTO);
  }

  deleteAnimals(id) {
    return this.animalsRepository.deleteAnimals(id);
  }

  async setExecutor(id, user) {
    const { affected } = await this.animalsRepository.update(
      { id: id, user: null },
      { user: user },
    );
    if (affected == 1) {
      return { success: true };
    } else {
      throw new ConflictException('Could not adopt animal');
    }
  }

  async finishExecutor(id, user) {
    const { affected } = await this.animalsRepository.update(
      { id: id, user: user },
      { finishedAt: new Date() },
    );
    if (affected == 1) {
      return { success: true };
    } else {
      throw new ConflictException('Could not finishd adoption animal');
    }
  }
}
