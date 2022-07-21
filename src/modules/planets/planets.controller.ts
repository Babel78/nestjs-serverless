import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PlanetsService } from "./planets.service";
import { CreatePlanetDto } from "./dto/create-planet.dto";
import { UpdatePlanetDto } from "./dto/update-planet.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { responsePlanetDto } from "./dto/response-planet.dto";

@ApiTags("Planetas")
@Controller("planets")
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @ApiOperation({ description: "Crear un planeta" })
  @ApiResponse({
    status: 200,
    schema: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
  })
  @ApiResponse({
    status: 400,
    schema: {
      type: "object",
      properties: {
        statusCode: {
          type: "number",
        },
        message: {
          type: "array",
          items: {
            type: "string",
          },
        },
        error: {
          type: "string",
        },
      },
    },
  })
  @Post()
  create(@Body() createPlanetDto: CreatePlanetDto) {
    return this.planetsService.create(createPlanetDto);
  }

  @ApiOperation({ description: "Listar todos los planetas" })
  @ApiResponse({
    status: 200,
    type: responsePlanetDto,
    isArray: true,
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  @Get()
  findAll() {
    return this.planetsService.findAll();
  }

  @ApiOperation({ description: "Obtener planeta por id" })
  @ApiResponse({
    status: 200,
    type: responsePlanetDto,
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.planetsService.findOne(+id);
  }

  @ApiOperation({ description: "Eliminar un planeta" })
  @ApiResponse({
    status: 200,
    schema: {
      type: "object",
      properties: {
        message: { type: "string" },
      },
    },
  })
  @ApiResponse({ status: 404, description: "Not Found" })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.planetsService.remove(+id);
  }
}
