import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('planet')
export class Planet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  diametro: string;

  @Column()
  periodo_rotacional: string;

  @Column()
  periodo_orbital: string;

  @Column()
  gravedad: string;

  @Column()
  plobacion: string;

  @Column()
  clima: string;

  @Column()
  terreno: string;

  @Column()
  superficie_agua: string;
}
