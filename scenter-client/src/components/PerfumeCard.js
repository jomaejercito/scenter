import React from 'react';


class PerfumeCard extends React.Component {
 
  render() {
    const { perfume } = this.props
    return (
      <div className="perfume-card">
        <div className="container-fluid text-center">
          <img src={perfume.image} width="170" height="200" alt="pic" />
          <h4 className="perfume-name">{this.props.perfume.name}</h4>
        </div>
      </div>
    )
  }
}

export default PerfumeCard;