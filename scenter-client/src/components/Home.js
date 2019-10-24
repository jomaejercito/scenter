import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {

  return (
    <div className="home">
      <h1>Scenter</h1>
      <h3>A Luxury Fragrance Database</h3>
      <Link to="/perfumes">
        <Button className="btn btn-dark">
          See Perfumes
        </Button>
      </Link>
    </div>
  );
}

export default Home;