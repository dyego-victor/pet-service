import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnimalsService } from './animals.service';
import { CreateAnimalDTO } from './dtos/create-animal.dto';
import { UpdateAnimalDTO } from './dtos/update-animal.dto';

@Controller('animals')
@UseGuards(AuthGuard())
export class AnimalsController {
  constructor(private animalsService: AnimalsService) {}

  @Get()
  getAllAnimals() {
    return this.animalsService.getAllAnimals();
  }

  @Get('/:id')
  getAnimalsByPk(@Param('id') id) {
    return this.animalsService.getAnimalsByPk(id);
  }

  @Post()
  createAnimals(@Body() createAnimalDTO: CreateAnimalDTO) {
    return this.animalsService.createAnimals(createAnimalDTO);
  }

  @Put('/:id')
  updateAnimals(@Param('id') id, @Body() updateAnimalDTO: UpdateAnimalDTO) {
    return this.animalsService.updateAnimals(id, updateAnimalDTO);
  }

  @Delete('/:id')
  deleteAnimals(@Param('id') id) {
    return this.animalsService.deleteAnimals(id);
  }
}
