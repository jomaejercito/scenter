import React from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';
import { fetchComments, fetchPerfume } from '../actions';


class PerfumeShow extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      perfume: {}
    }
  }

  componentDidMount() {
    const { perfumeId } = this.props.match.params
      if (perfumeId != null) {
        this.props.fetchPerfume(perfumeId).then(perfume =>{
          this.setState({ perfume })
        })
        this.props.fetchComments(perfumeId);
      }
  }

  render() {
    const { comments } = this.props;
    const { perfume } = this.state;
    return (
      <div className="perfume-show">
        <h3 className="perfume-show-title">{perfume.name}</h3>
        <div className="perfume-show-image">
          <img src={perfume.image} alt="pic" />
        </div>
        <div className="comments">
          <CommentsList comments={comments} />
          <CommentForm perfumeId={this.props.match.params.perfumeId}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const perfume = state.perfumes.find(perfume => perfume.id === +ownProps.match.params.perfumeId) || {}
  return ({
    perfume: perfume,
    comments: state.comments
  })
}

export default connect(mapStateToProps, { fetchPerfume, fetchComments })(PerfumeShow);