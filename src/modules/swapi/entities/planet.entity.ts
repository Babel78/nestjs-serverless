export class Planet {
  nombre: string;
  diametro: string;
  periodo_rotacional: string;
  periodo_orbital: string;
  gravedad: string;
  plobacion: string;
  clima: string;
  terreno: string;
  superficie_agua: string;

  constructor(partial: Partial<Planet>) {
    Object.assign(this, partial);
  }

  static mapData() {}
}
