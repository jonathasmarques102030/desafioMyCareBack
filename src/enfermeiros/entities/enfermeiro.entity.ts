import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

const { nanoid } = require('nanoid');

@Entity('enfermeiros')
export class Enfermeiro {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  generateId() {
    this.id = `enf_${nanoid()}`;
  }
}
