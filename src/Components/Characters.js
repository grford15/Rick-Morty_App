import React, { Component } from 'react';

class Characters extends Component {

  constructor(props){
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount(){
    let url = "https://rickandmortyapi.com/api/character/"
    fetch(url)
    .then(response => response.json())
    .then(results => this.setState({results: results["results"]}))
    .catch(err => console.log(err));
  }

  render() {
    return(
      <h1>Characters</h1>
    )
  }
}

export default Characters;
