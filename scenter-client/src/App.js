import React from 'react';
import './App.css';

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

export default App;
