import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Planet } from '../../database/entities/planet.entity';
import { CreatePlanetDto } from './dto/create-planet.dto';
import { UpdatePlanetDto } from './dto/update-planet.dto';

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(Planet) private planetsRepository: Repository<Planet>,
  ) {}
  create(createPlanetDto: CreatePlanetDto) {
    return 'This action adds a new planet';
  }

  findAll(): Promise<Planet[]> {
    return this.planetsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} planet`;
  }

  update(id: number, updatePlanetDto: UpdatePlanetDto) {
    return `This action updates a #${id} planet`;
  }

  remove(id: number) {
    return `This action removes a #${id} planet`;
  }
}
