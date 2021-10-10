import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { AdoptAnimalService } from './adopt-animal.service';

@Controller('adopt-animal')
@UseGuards(AuthGuard('jwt'))
export class AdoptAnimalController {
  constructor(private adoptAnimalService: AdoptAnimalService) {}

  @Post('/animal/:id')
  startAdoptAnimal(@Param('id') id, @GetUser() user: User) {
    return this.adoptAnimalService.executeAdoption(id, user);
  }

  @Post('/animal/:id/finish')
  finishtAdoptAnimal(@Param('id') id, @GetUser() user: User) {
    return this.adoptAnimalService.finishAdoption(id, user);
  }

  @Get('/animal/user/')
  getUserAdoption(@GetUser() user: User) {
    return this.adoptAnimalService.getAllByUser(user);
  }
}
