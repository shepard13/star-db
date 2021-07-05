import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const StarshipList = withData(ItemList, getAllStarships);
const PlanetList = withData(ItemList, getAllPlanets);

export { PersonList, StarshipList, PlanetList };
