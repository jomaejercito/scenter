import React from 'react';
import PerfumeCard from './PerfumeCard';


const PerfumeList = ({ perfumes }) => {
  
    const renderPerfumes = perfumes.perfumes.map(perfume =>
       <PerfumeCard key={perfume.id} perfume={perfume} />
    );
  
      return (
        <div>
          {renderPerfumes}
        </div>
      )
  
  }
  
  export default PerfumeList;