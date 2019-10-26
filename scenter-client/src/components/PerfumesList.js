import React from 'react';
import PerfumeCard from './PerfumeCard';

const PerfumesList = ({ perfumes }) => {
  
    const renderPerfumes = perfumes.map(perfume =>
       <PerfumeCard key={perfume.id} perfume={perfume} />
    );
  
      return (
        <div className="container-fluid">
          <div className="row">
            {renderPerfumes}
          </div>
        </div>
      )
  
  }
  
  export default PerfumesList;