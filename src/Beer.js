'use esversion: 6'
import React from 'react'
import './Beer.css'

function Beer(props) {
  const abvClasses = ['beer-abv', props.beer.strength]
  let { hops, malt, yeast } = props.beer.ingredients
  hops = new Set(hops.map(hop => hop.name))
  malt = new Set(malt.map(m => m.name))
  let ingredients = [...hops, ...malt, yeast].join(', ')
  return (
    <div className="container">
      <h3 className="beer-name">{props.beer.name}</h3>
      <img
        className="beer-image"
        alt={`The ${props.beer.name} beer`}
        src={props.beer.image}
      />
      <p className={abvClasses.join(' ')}>{props.beer.abv}%</p>
      <p className={'beer-ingredients'}>
        <span style={{ fontWeight: 'bold' }}>Ingredients:</span> {ingredients}
      </p>
    </div>
  )
}

export default Beer
