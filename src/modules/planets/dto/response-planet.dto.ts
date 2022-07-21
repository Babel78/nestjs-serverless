import { ApiProperty, ApiQuery } from "@nestjs/swagger";
import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class responsePlanetDto {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  id: number;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  diametro: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  periodo_rotacional: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  periodo_orbital: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  gravedad: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  plobacion: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  clima: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  terreno: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  superficie_agua: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  createdAt: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  updatedAt: string;
}
