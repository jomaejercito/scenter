import React from 'react';
import PerfumesList from '../components/PerfumesList';
import { connect } from 'react-redux';
import { fetchPerfumes } from '../actions';
import SearchBar from '../components/SearchBar';


class PerfumesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      perfumesReverse: [],
      showReverse: false
    }
    this.sortReverse = this.sortReverse.bind(this)
  }

  componentDidMount() {
    this.props.fetchPerfumes()
  }

  sortReverse = () => {

    if (this.state.showReverse) {
      return this.setState({
        showReverse: !this.state.showReverse
      })
    }
    this.setState(state => ({
      perfumesReverse: [...this.props.perfumes].reverse(),
      showReverse: true
    }))
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

        <button onClick={this.sortReverse}>
          Click to Reverse
        </button>
        
        <PerfumesList perfumes={this.state.showReverse ? this.state.perfumesReverse : perfumes} />
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