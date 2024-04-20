import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unidades')
export class Unidades {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  unidade: string;

  @Column()
  horario: string;
}
