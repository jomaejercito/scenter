import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {

  return (
    <div className="home">
      <div className="home-center">
        <h1 className="home-logo">Scenter</h1>
        <h3 className="home-subheader">A Luxury Fragrance Database</h3>
        <Link to="/perfumes">
          <Button className="btn btn-dark">
            See Perfumes
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;