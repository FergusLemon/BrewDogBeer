import React from 'react'
import BrewDogApi from './communications/brewDogApi.js'
import Beer from './Beer.js'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { canRender: false }
  }

  async componentDidMount() {
    try {
      const data = await BrewDogApi.getBeers()
      this.setState({ beers: data, canRender: true })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { beers, canRender } = this.state
    if (!canRender) {
      return <p>BrewDog Beers after 2015 between 5%-11% ABV</p>
    } else {
      return (
        <ul>
          {beers.map(beer => (
            <li>
              <Beer beer={beer} key={beer.id} />
            </li>
          ))}
        </ul>
      )
    }
  }
}

export default App
