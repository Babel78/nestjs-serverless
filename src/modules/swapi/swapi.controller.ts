import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { CreateSwapiDto } from './dto/create-swapi.dto';
import { UpdateSwapiDto } from './dto/update-swapi.dto';

@Controller('swapi')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Post()
  create(@Body() createSwapiDto: CreateSwapiDto) {
    return this.swapiService.create(createSwapiDto);
  }

  @Get('/planets')
  findAll(@Query('page') page: string) {
    return this.swapiService.findAll(page);
  }

  @Get('/planets/:id')
  findOne(@Param('id') id: string) {
    return this.swapiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSwapiDto: UpdateSwapiDto) {
    return this.swapiService.update(+id, updateSwapiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.swapiService.remove(+id);
  }
}
