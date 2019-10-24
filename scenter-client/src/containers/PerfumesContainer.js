import React from 'react';
import PerfumeList from '../components/PerfumeList';
import { connect } from 'react-redux';
import { fetchPerfumes } from '../actions';

class PerfumesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPerfumes()
  }
  
  render() {
    const { perfumes } = this.props

    return (
      <div>
        <PerfumeList perfumes={perfumes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    perfumes: state.perfumes
  }
}

export default connect(mapStateToProps, { fetchPerfumes })(PerfumesContainer);