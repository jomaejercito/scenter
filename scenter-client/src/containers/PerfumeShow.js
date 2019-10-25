import React from 'react';
import { connect } from 'react-redux';
import { fetchPerfumes } from '../actions';

class PerfumeShow extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      perfume: {}
    }
  }

  componentDidMount() {
    this.props.fetchPerfumes();
  }

  render() {
    const { perfume } = this.props;
    
    return (
      <div className="perfume-show">
        <h3 className="perfume-show-title">{perfume.name}</h3>
        <div className="perfume-show-image">
          <img src={perfume.image} alt="pic" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const perfume = state.perfumes.find(perfume => perfume.id === +ownProps.match.params.perfumeId) || {}
  return ({
    perfume: perfume
  })
}

export default connect(mapStateToProps, { fetchPerfumes })(PerfumeShow);