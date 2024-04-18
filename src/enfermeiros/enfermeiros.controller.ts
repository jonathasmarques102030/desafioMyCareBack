import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnfermeirosService } from './enfermeiros.service';
import { CreateEnfermeiroDto } from './dto/create-enfermeiro.dto';
import { UpdateEnfermeiroDto } from './dto/update-enfermeiro.dto';

@Controller('enfermeiros')
export class EnfermeirosController {
  constructor(private readonly enfermeirosService: EnfermeirosService) {}

  @Post()
  create(@Body() createEnfermeiroDto: CreateEnfermeiroDto) {
    return this.enfermeirosService.create(createEnfermeiroDto);
  }

  @Get()
  findAll() {
    return this.enfermeirosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.enfermeirosService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnfermeiroDto: UpdateEnfermeiroDto,
  ) {
    return this.enfermeirosService.update(id, updateEnfermeiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.enfermeirosService.remove(id);
  }
}
