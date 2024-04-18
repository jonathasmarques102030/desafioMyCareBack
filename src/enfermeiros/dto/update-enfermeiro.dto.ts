import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermeiroDto } from './create-enfermeiro.dto';

export class UpdateEnfermeiroDto extends PartialType(CreateEnfermeiroDto) {}
