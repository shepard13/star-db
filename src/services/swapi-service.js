export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} recived ${res.status}`);
    }
    return await res.json();
  }
  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results;
  }
  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }
  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }
  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  }
  async getAllStarships() {
    const res = await this.getResource(`/startships/`);
    return res.results;
  }
  getStarship(id) {
    return this.getResource(`/startship/${id}/`);
  }
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      climate: planet.climate,
      gravity: planet.gravity,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    };
  }
  _transformStarship(startship) {
    return {
      id: this._extractId(startship),
      name: startship.name,
      model: startship.model,
      startshipClass: startship.startship_class,
      manufacturer: startship.manufacturer,
      costInCredits: startship.cost_in_credits,
      length: startship.length,
      crew: startship.crew,
      cargoCapacity: startship.cargo_capasity,
      passengers: startship.passengers,
    };
  }

  _transformPeople(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      eyeColor: person.eye_color,
      gender: person.gender,
      birthYear: person.birth_year,
      hairColor: person.hair_color,
      mass: person.mass,
      height: person.height,
    };
  }
}
