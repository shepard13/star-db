import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';
import Row from '../row/row';
import './app.css';
import SwapiService from '../../services/swapi-service';
import ItemDetails from '../item-details';
export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const { getPerson, getStarship, getPersonImage, getStarshipImage } =
      this.swapiService;
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );
    const starshipDetails = (
      <ItemDetails
        itemId={10}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );
    return (
      <div className='stardb-app'>
        <Header />
        <Row left={personDetails} right={starshipDetails} />
      </div>
    );
  }
}
