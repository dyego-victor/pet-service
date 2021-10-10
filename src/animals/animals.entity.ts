import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  gender: string;
  @Column()
  type: string;
  @Column()
  age: string;
  @Column()
  color: string;
  @Column()
  breed: string;
  @Column()
  size: string;

  @ManyToOne((type) => User, (user) => user.animals, { eager: false })
  user: User;

  @Column({ nullable: true })
  finishedAt: Date;
}
