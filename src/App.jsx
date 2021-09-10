import React from 'react';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import BeerCreate from './components/BeerCreate';

import * as api from './lib/api'

class App extends React.Component {
  constructor () {
    super()

    this.state = {
      page: 0,
      fullBeerList: [],
      selectedBeer: null,
      itemsInCart: []
    }
  }

  async componentDidMount () {
    const beers = await api.getBeers()
    this.setState({
      fullBeerList: beers,
    })
  }

  updatePage (newPage = 0) {
    this.setState({
      page: newPage,
    })
  }

  addNewBeerToList = (newBeer) => {
    this.setState({
      fullBeerList: this.state.fullBeerList.concat(newBeer),
      page: 0
    }, () => {
      api.updateBeers(this.state.fullBeerList)
    });
  }

  handleSelectedBeer = (id) => {
    this.setState({
      selectedBeer: this.state.fullBeerList.find(beer => beer.id === id),
      page: 2
    })
  }

  purchaseBeer = () => {
    const index = this.state.fullBeerList.findIndex(beer => beer.id === this.state.selectedBeer.id)
    this.state.fullBeerList[index].availability--
    if (this.state.fullBeerList[index].availability < 0) {
      this.state.fullBeerList[index].availability = 0
    }
    this.setState({
      fullBeerList: this.state.fullBeerList,
      page: 2
    })
  }

  restockBeer = () => {
    const index = this.state.fullBeerList.findIndex(beer => beer.id === this.state.selectedBeer.id)
    // this.state.fullBeerList[index].availability++
    this.state.fullBeerList[index].availability = (this.state.fullBeerList[index].availability += '124')
    this.setState({
      fullBeerList: this.state.fullBeerList
    })
  }


  render () {
    let pageView
    if (this.state.page === 0) {
      pageView = (
        <BeerList
          beerList={this.state.fullBeerList}  
          handleSelectedBeer={this.handleSelectedBeer}
        />
      )
    } else if (this.state.page === 1) {
      pageView = (
        <BeerCreate 
          onNewBeerCreation={(beer) => this.addNewBeerToList(beer)}
        />
      )
    } else if (this.state.page === 2) {
      pageView = (
        <BeerDetails 
          beer={this.state.selectedBeer}
          purchaseBeer={this.purchaseBeer}
          restockBeer={this.restockBeer}
        />
      )
    }

    return (
      <div>
        <nav>
          <button onClick={() => this.updatePage(0)}>
            Beer List
          </button>
          <button onClick={() => this.updatePage(1)}>
            Add New Beer
          </button>
        </nav>

        {pageView}
      </div>
    )
  }
  
}

export default App;
