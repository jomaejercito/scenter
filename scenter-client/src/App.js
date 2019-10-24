import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import PerfumesContainer from './containers/PerfumesContainer';
import PerfumeShow from './containers/PerfumeShow';

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
      <Router>
        <div className="App">
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/perfumes" component={PerfumesContainer} />
          <Route exact path="/perfumes/:perfumeId" component={PerfumeShow} />
        </div>
      </Router>
    )
  }
}


export default App;
