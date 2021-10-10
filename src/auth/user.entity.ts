import { Animal } from 'src/animals/animals.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;

  @OneToMany((type) => Animal, (animal) => animal.user, { eager: true })
  animals: Animal[];
}
