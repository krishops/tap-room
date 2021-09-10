import React from 'react';
import PropTypes from 'prop-types';

const BeerDetails = (props) => {
  const { beer } = props 

  return(
    <React.Fragment>
      <h1>{beer.name}</h1>
      <h2>{beer.brand}</h2>
      <h4>Alcohol Content: {beer.alcoholContent}</h4>
      <p>{beer.description}</p>
      <p>${beer.price}</p>
      <p>{beer.availability} pints</p>
    </React.Fragment>
  )
}

BeerDetails.propTypes = {
  beer: PropTypes.object
}

export default BeerDetails