import React from 'react';
import Header from './header'
import Loader from './loader'

const Single = React.createClass({
  getInitialState() {
    return {
      beer: {},
      loading: true
    }
  },

  loadBeer() {
    this.setState({ loading: true });
    const beerID = this.props.params.beerId
    fetch(`http://api.react.beer/v2/beer/${beerID}`)
    .then(data => data.json())
    .then((beer) => {
      this.setState({
        beer: beer.data,
        loading: false
      });
    })
    .catch(err => console.error(err));
  },

  componentWillMount() {
    this.loadBeer();
  },

  render() {
    if (this.state.loading) {
      return <Loader message="Pouring a cold one!"/>
    }
    return (
      <div>
        <Header siteName="Beer Me" />
        <div className="single-beer">
          { this.state.beer['name'] }
          <br/>
          { this.state.beer['description'] }
        </div>
      </div>
    )
  }
});

export default Single;
