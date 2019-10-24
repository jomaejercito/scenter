import React from 'react';


class PerfumeCard extends React.Component {
 
  render() {
    const { perfume } = this.props
    return (
      <div>
        <h3>{this.props.perfume.name}</h3>
        <img src={perfume.image} width="170" height="200" alt="pic" />
      </div>
    )
  }
}

export default PerfumeCard;