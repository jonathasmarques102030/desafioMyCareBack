import { Injectable } from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { Unidades } from './entities/unidade.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UnidadesService {
  constructor(
    @InjectRepository(Unidades)
    private readonly repository: Repository<Unidades>,
  ) {}

  create(createUnidadeDto: CreateUnidadeDto) {
    const unidade = this.repository.create(createUnidadeDto);
    return this.repository.save(unidade);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id) {
    return this.repository.findOneBy(id);
  }

  async update(id, updateUnidadeDto: UpdateUnidadeDto) {
    const unidade = await this.repository.findOneBy(id);
    if (!unidade) return null;
    this.repository.merge(unidade, updateUnidadeDto);
    return this.repository.save(unidade);
  }

  async remove(id) {
    const unidade = await this.repository.findOneBy(id);
    if (!unidade) return null;
    return this.repository.remove(unidade);
  }
}
