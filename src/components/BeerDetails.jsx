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
          <p>Pint Availability: {beer.availability <= 0 ? "Out of Stock" : beer.availability}</p>
          <p>Keg Availability: {beer.availability < 124 ? "Out of Kegs" : Math.floor(parseInt(beer.availability) / 124)}</p>

          <div><button onClick={props.purchasePint}>Buy a Pint!</button></div>
          <div><button onClick={props.purchaseKeg}>Buy a Keg!</button></div>
          <div><button onClick={props.restockKeg}>Restock</button></div>
        </div>
    </React.Fragment>
  )
}

BeerDetails.propTypes = {
  beer: PropTypes.object
}

export default BeerDetails