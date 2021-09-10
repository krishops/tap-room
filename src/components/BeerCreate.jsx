import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function BeerCreate (props) {

  function createNewBeer(event) {
    event.preventDefault();

    props.onNewBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      description: event.target.description.value,
      alcoholContent: event.target.alcoholContent.value,
      price: event.target.price.value,
      availability: parseInt(event.target.availability.value) * 124,
      id: v4()
    });
  }

  return(
    <React.Fragment>
      <form onSubmit={createNewBeer}>
        <label>Beer Name:</label>
          <input
            type='text'
            name='name' />

        <label>Brand:</label>
          <input
            type='text'
            name='brand' />

        <label>Description:</label>
          <textarea
            name='description'
            placeholder='Describe the Product' />

        <label>Alcohol Content:</label>
          <input
            type='number'
            name='alcoholContent' />
            
        <label>Price:</label>
          <input
            type='number'
            name='price' />

        <label>Availability:</label>
          <input
            type='number'
            name='availability'
            placeholder='number of kegs' />
            <hr />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  )
}

BeerCreate.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default BeerCreate