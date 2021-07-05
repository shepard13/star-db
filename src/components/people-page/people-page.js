import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBouundery from '../../error-boundery/error-boundery';
import './people-page.css';
import Row from '../row/row';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 3,
    hasError: false,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBouundery>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBouundery>
    );

    return <Row left={itemList} right={personDetails} />;
  }
}
