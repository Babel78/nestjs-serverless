import { Planet } from './planet.entity';

export class Swapi {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;

  constructor(partial: Partial<Swapi>) {
    Object.assign(this, partial);
  }

  public mapToEntity(): Planet {
    const objPlanet = {
      nombre: this.name,
      diametro: this.diameter,
      periodo_rotacional: this.rotation_period,
      periodo_orbital: this.orbital_period,
      gravedad: this.gravity,
      plobacion: this.population,
      clima: this.climate,
      terreno: this.terrain,
      superficie_agua: this.surface_water,
    };
    return new Planet(objPlanet);
  }
}
