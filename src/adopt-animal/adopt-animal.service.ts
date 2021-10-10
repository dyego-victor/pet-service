import { Injectable } from '@nestjs/common';
import { AnimalsService } from 'src/animals/animals.service';
import { User } from 'src/auth/user.entity';

@Injectable()
export class AdoptAnimalService {
  constructor(private animalsService: AnimalsService) {}

  async executeAdoption(id, user) {
    const animal = await this.animalsService.getAnimalsByPk(id);
    animal.user = user;
    return this.animalsService.setExecutor(id, user);
  }

  async finishAdoption(id, user) {
    return this.animalsService.finishExecutor(id, user);
  }
  getAllByUser(user: User) {
    return this.animalsService.getAllByUser(user);
  }
}
