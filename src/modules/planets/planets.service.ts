import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Planet } from "../../database/entities/planet.entity";
import { CreatePlanetDto } from "./dto/create-planet.dto";
import { UpdatePlanetDto } from "./dto/update-planet.dto";

@Injectable()
export class PlanetsService {
  constructor(
    @InjectRepository(Planet) private planetsRepository: Repository<Planet>
  ) {}
  async create(createPlanetDto: CreatePlanetDto) {
    try {
      await this.planetsRepository.save(createPlanetDto);
      return { message: "Se agrego el registro" };
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }

  async findAll(): Promise<Planet[]> {
    try {
      return await this.planetsRepository.find();
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }

  async findOne(id: number) {
    try {
      const planet = await this.planetsRepository.findOne(id);
      if (!planet) {
        return { message: "No se encontro el registro" };
      } else return planet;
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }

  update(id: number, updatePlanetDto: UpdatePlanetDto) {
    return `This action updates a #${id} planet`;
  }

  async remove(id: number) {
    try {
      await this.planetsRepository.delete({ id });
      return { message: "Se eliminó el registro" };
    } catch (error) {
      console.log(error);
      throw new NotFoundException();
    }
  }
}
