import React from 'react';
import Header from './header'

const Main = React.createClass({
  getInitialState() {
    return {
      numBeers : 10,
      beers: []
    }
  },

  incrementBeers() {
    // create a new upated state variable
    const beerAmount = this.state.numBeers + 1;
    // set state to that amount
    this.setState({numBeers : beerAmount });
  },

  loadBeers(searchTerm = 'hops') {
    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    // when the data comes back convert it to json
    .then(data => data.json())
    // when the data is converted, put it in state
    .then((beers) => {
      console.log(beers)

      // filter for beers with images
      const filteredBeers = beers.data.filter(beer => !!beer.labels);
      this.setState({ beers: filteredBeers });
    })
    .catch(err => console.error(err));
  },

  componentWillMount() {
    this.loadBeers();
  },

  render () {
    return (
      <div className="wrapper">
        <Header siteName="Beer Me" />
        <br/>
        <br/>
        <br/>
        <br/>
        <button onClick={this.incrementBeers}>{this.state.numBeers} 🍺</button>
      </div>
    )
  }
});

export default Main;
