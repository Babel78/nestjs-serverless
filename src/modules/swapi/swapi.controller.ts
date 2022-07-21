import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from "@nestjs/common";
import { SwapiService } from "./swapi.service";
import { CreateSwapiDto } from "./dto/create-swapi.dto";
import { UpdateSwapiDto } from "./dto/update-swapi.dto";
import {
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { PlanetDto } from "./dto/list-swapi.dto";
import { CreatePlanetDto } from "../planets/dto/create-planet.dto";

@ApiTags("SWAPI - Integración con la API")
@Controller("swapi")
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @ApiOperation({ description: "Lista de planetas paginado" })
  @ApiQuery({
    name: "page",
    type: "string",
    required: false,
    description: "Pagina del listado a traer",
  })
  @ApiResponse({
    status: 200,
    type: PlanetDto,
    isArray: true,
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  @Get("/planets")
  findAll(@Query("page") page: string) {
    return this.swapiService.findAll(page);
  }

  @ApiOperation({ description: "Listar planeta por id" })
  @ApiParam({
    name: "id",
    type: "string",
    required: true,
    description: "Posición del Listado de planetas",
  })
  @ApiResponse({
    status: 200,
    type: PlanetDto,
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  @Get("/planets/:id")
  findOne(@Param("id") id: string) {
    return this.swapiService.findOne(+id);
  }
}
