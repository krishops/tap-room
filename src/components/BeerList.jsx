import React from 'react';
import PropTypes from 'prop-types';


const BeerList = (props) => {

  return(
    <React.Fragment>
      <h1>Beer List</h1>
      {props.beerList.map((beer) => (
        <div>
        <div>{beer.name}</div>
        <button onClick={() => props.handleSelectedBeer(beer.id)}>Get Details</button>
        </div>
      ))}
    </React.Fragment>
  )

}

BeerList.propTypes = {
  beerList: PropTypes.array
}
export default BeerList