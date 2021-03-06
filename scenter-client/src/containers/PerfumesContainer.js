import React from 'react';
import PerfumesList from '../components/PerfumesList';
import { connect } from 'react-redux';
import { fetchPerfumes } from '../actions';
import SearchBar from '../components/SearchBar';


class PerfumesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  componentDidMount() {
    this.props.fetchPerfumes()
  }

  render() {
    const { perfumes } = this.props

    return (
      <div>
        <SearchBar submitSearch={value => {
          const newList = perfumes.filter(item => {
            const lc = item.name.toLowerCase().trim();
            const filter = value.toLowerCase().trim();
                
            return lc.includes(filter);
          });
          this.setState({ searchResults: newList })
        }}
        />

        <PerfumesList perfumes={this.state.searchResults.length > 0 ? this.state.searchResults : perfumes} />
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