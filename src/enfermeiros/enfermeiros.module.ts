import { Module } from '@nestjs/common';
import { EnfermeirosService } from './enfermeiros.service';
import { EnfermeirosController } from './enfermeiros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enfermeiro } from './entities/enfermeiro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enfermeiro])],
  controllers: [EnfermeirosController],
  providers: [EnfermeirosService],
})
export class EnfermeirosModule {}
