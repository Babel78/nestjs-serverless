import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSwapiDto } from "./dto/create-swapi.dto";
import { UpdateSwapiDto } from "./dto/update-swapi.dto";
import axios from "axios";
import { Swapi } from "./entities/swapi.entity";

@Injectable()
export class SwapiService {
  BASE_URL: string = "https://swapi.py4e.com/api";
  create(createSwapiDto: CreateSwapiDto) {
    return "This action adds a new swapi";
  }

  async findAll(page: string) {
    try {
      let pageUrl = "";
      if (page != null) {
        pageUrl = `?page=${Number(page)}`;
      }
      const response = await axios.get(`${this.BASE_URL}/planets${pageUrl}`);
      const data = response.data.results;
      return data.map((el: any) => new Swapi(el).mapToEntity());
    } catch (error) {
      console.log(error.data);
      throw new NotFoundException();
    }
  }

  async findOne(id: number) {
    try {
      const response = await axios.get(`${this.BASE_URL}/planets/${id}`);
      const data = response.data;
      return new Swapi(data).mapToEntity();
    } catch (error) {
      throw new NotFoundException();
    }
  }

  update(id: number, updateSwapiDto: UpdateSwapiDto) {
    return `This action updates a #${id} swapi`;
  }

  remove(id: number) {
    return `This action removes a #${id} swapi`;
  }
}
