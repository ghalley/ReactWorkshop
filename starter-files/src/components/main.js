import React from 'react';
import Header from './header'
import Results from './results'

const Main = React.createClass({
  getInitialState() {
    return {
      numBeers : 10,
      beers: [],
      loading: true
    }
  },

  incrementBeers() {
    // create a new upated state variable
    const beerAmount = this.state.numBeers + 1;
    // set state to that amount
    this.setState({numBeers : beerAmount });
  },

  loadBeers(searchTerm = 'hops') {
    this.setState({ loading: true });
    // first check if we can pull from localStorage
    const localStorageBeers = localStorage.getItem(`search-${searchTerm}`);
    if (localStorageBeers) {
      const localBeers = JSON.parse(localStorageBeers);
      this.setState({
        beers: localBeers,
        loading: false
      });
      return;
    }

    fetch(`http://api.react.beer/v2/search?q=${searchTerm}&type=beer`)
    // when the data comes back convert it to json
    .then(data => data.json())
    // when the data is converted, put it in state
    .then((beers) => {
      // filter for beers with images
      const filteredBeers = beers.data.filter(beer => !!beer.labels);
      this.setState({ 
        beers: filteredBeers,
        loading: false
      });

      // save them to localStorage
      localStorage.setItem(`search-${searchTerm}`, JSON.stringify(filteredBeers));
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
        <Results {...this.state} />
      </div>
    )
  }
});

export default Main;
