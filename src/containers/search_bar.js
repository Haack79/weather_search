import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; //this initializes the state. value of input mapped to this.state.term, and starts as empty string.
    this.onInputChange = this.onInputChange.bind(this); //take existing function, and bind it to this and then replace existing fucntion with it
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});
    //when we have a callback we need to bind.
     //this says to broswer don't submit the form.
    //we need to go and fetch weather data.

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );//the onChange //this is a callback
    //if you have a callback that makes a reference to this, chances are you need to bind it. so it can be aware of it
    //can do the bind with bind or fat arrow function.
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// passing null says thanks but we don't need state here.
