import React from 'react';
import PropTypes from 'prop-types';

const BeerDetails = (props) => {
  const { beer } = props 

  return(
    <React.Fragment>
      <h1>{beer.name}</h1>
      <h2>{beer.brand}</h2>
      <h4>Alcohol Content: {beer.alcoholContent}</h4>
        <div className='col'>
          <div className='description-box'>{beer.description}</div>
          <p>Price: ${beer.price}</p>
          <p>Availability: {beer.availability <= 0 ? "Out of Stock" : beer.availability + " pints"}</p>
          <button onClick={props.purchaseBeer}>Buy Now!</button>
          <button onClick={props.restockBeer}>Restock</button>
          {console.log("We successfully added a keg", beer.availability)}
        </div>
    </React.Fragment>
  )
}

BeerDetails.propTypes = {
  beer: PropTypes.object
}

export default BeerDetails