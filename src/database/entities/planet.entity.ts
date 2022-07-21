import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("planet")
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

  @CreateDateColumn({ type: "timestamp" })
  public createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp" })
  public updatedAt!: Date;
}
