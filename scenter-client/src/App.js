import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchPerfumes } from './actions/index'

class App extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/api/v1/perfumes/', {
      method: 'GET'
    })
    .then (response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="app">
        App
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     perfumes: state.perfumes
//   }
// }

export default connect(null, {fetchPerfumes})(App);
