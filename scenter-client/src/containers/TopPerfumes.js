import React from 'react';
import PerfumesList from '../components/PerfumesList';
import { connect } from 'react-redux';
import { fetchTopPerfumes } from '../actions';

class TopPerfumes extends React.Component {
  componentDidMount() {
    this.props.fetchTopPerfumes()
  }
  
  render() {
    const { perfumes } = this.props

    return (
      <div>
        <PerfumesList perfumes={perfumes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    perfumes: state.perfumes
  }
}

export default connect(mapStateToProps, { fetchTopPerfumes })(TopPerfumes);