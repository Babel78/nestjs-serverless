import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class PlanetDto {
  @IsString()
  @ApiProperty()
  nombre: string;

  @IsString()
  @ApiProperty()
  diametro: string;

  @IsString()
  @ApiProperty()
  periodo_rotacional: string;

  @IsString()
  @ApiProperty()
  periodo_orbital: string;

  @IsString()
  @ApiProperty()
  gravedad: string;

  @IsString()
  @ApiProperty()
  plobacion: string;

  @IsString()
  @ApiProperty()
  clima: string;

  @IsString()
  @ApiProperty()
  terreno: string;

  @IsString()
  @ApiProperty()
  superficie_agua: string;
}
