import { Injectable } from '@nestjs/common';
import { CreateEnfermeiroDto } from './dto/create-enfermeiro.dto';
import { UpdateEnfermeiroDto } from './dto/update-enfermeiro.dto';
import { Repository } from 'typeorm';
import { Enfermeiro } from './entities/enfermeiro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EnfermeirosService {
  constructor(
    @InjectRepository(Enfermeiro)
    private readonly repository: Repository<Enfermeiro>,
  ) {}

  create(createEnfermeiroDto: CreateEnfermeiroDto) {
    const enfermeiro = this.repository.create(createEnfermeiroDto);
    return this.repository.save(enfermeiro);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, updateEnfermeiroDto: UpdateEnfermeiroDto) {
    const enfermeiro = await this.repository.findOneBy({ id });
    if (!enfermeiro) return null;
    this.repository.merge(enfermeiro, updateEnfermeiroDto);
    return this.repository.save(enfermeiro);
  }

  async remove(id: string) {
    const enfermeiro = await this.repository.findOneBy({ id });
    if (!enfermeiro) return null;
    return this.repository.remove(enfermeiro);
  }
}
