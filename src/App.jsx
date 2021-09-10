import React from 'react';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import BeerCreate from './components/BeerCreate';


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

  updatePage (newPage = 0) {
    this.setState({
      page: newPage,
    })
  }

  addNewBeerToList = (newBeer) => {
    this.setState({
      fullBeerList: this.state.fullBeerList.concat(newBeer),
      page: 0
    })
  }


  render () {
    let pageView
    if (this.state.page === 0) {
      pageView = (
        <BeerList
          beerList={this.state.fullBeerList}  
        />
      )
    } else if (this.state.page === 1) {
      pageView = (
        <BeerCreate 
          onNewBeerCreation={(beer) => this.addNewBeerToList(beer)}
        />
      )
    } else if (this.state.page === 2) {
        pageView = <BeerDetails />
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
