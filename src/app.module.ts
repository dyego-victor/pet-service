import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './animals/animals.module';
import { AuthModule } from './auth/auth.module';
import { AdoptAnimalModule } from './adopt-animal/adopt-animal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '1126',
      database: 'pet-service',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AnimalsModule,
    AuthModule,
    AdoptAnimalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
