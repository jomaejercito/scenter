import React from 'react'
import { Link } from 'react-router-dom'
 
const PerfumeCard = ({ perfume }) => {

    return (
      <div className="perfume-card">
        <div className="container-fluid text-center">
          <img src={perfume.image} width="170" height="220" alt="pic" />
          <h4 className="perfume-name"><Link key={perfume.id} to={`/perfumes/${perfume.id}`}>{perfume.name}</Link></h4>
        </div>
      </div>
    )
}

export default PerfumeCard;