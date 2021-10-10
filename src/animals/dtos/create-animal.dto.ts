import { IsNotEmpty } from 'class-validator';

export class CreateAnimalDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  age: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  breed: string;

  @IsNotEmpty()
  size: string;
}
