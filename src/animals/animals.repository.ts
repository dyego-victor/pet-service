import { EntityRepository, Repository } from 'typeorm';
import { CreateAnimalDTO } from './dtos/create-animal.dto';
import { UpdateAnimalDTO } from './dtos/update-animal.dto';
import { Animal } from './animals.entity';
import { NotFoundException } from '@nestjs/common';

@EntityRepository(Animal)
export class AnimalsRepository extends Repository<Animal> {
  getAllAnimals() {
    return this.createQueryBuilder('animal').getMany();
  }

  getAnimalsByPk(id) {
    return this.findOne(id);
  }
  createAnimals(createAnimalDTO: CreateAnimalDTO) {
    const { name, gender, type, age, color, breed, size } = createAnimalDTO;
    const animal = this.create({
      name,
      gender,
      type,
      age,
      color,
      breed,
      size,
    });
    return this.save(animal);
  }

  async updateAnimals(id, updateAnimalDTO: UpdateAnimalDTO) {
    const { name, gender, type, age, color, breed, size } = updateAnimalDTO;
    const animal = await this.getAnimalsByPk(id);

    if (!animal)
      throw new NotFoundException({
        error: 'Este animal não foi encontrado!',
      });

    animal.name = name;
    animal.gender = gender;
    animal.type = type;
    animal.age = age;
    animal.color = color;
    animal.breed = breed;
    animal.size = size;
    return this.save(animal);
  }
  deleteAnimals(id) {
    return this.delete(id);
  }
}
