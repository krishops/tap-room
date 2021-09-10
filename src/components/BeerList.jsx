import React from 'react';
import PropTypes from 'prop-types';


const BeerList = (props) => {

  return(
    <React.Fragment>
      <h1>Beer List</h1>
      {props.beerList.map((beer) => (
        <div>
        <div>{beer.name}</div>
        <div>{beer.brand}</div>
        <div>{beer.price}</div>
        <div>{beer.description}</div>
        <div>{beer.availability}</div>
        <div>{beer.alcoholContent}</div>
        </div>
      ))}
    </React.Fragment>
  )

}

BeerList.propTypes = {
  beerList: PropTypes.array
}
export default BeerList