import React from 'react';
import { connect } from 'react-redux';
import CommentsList from '../components/CommentsList';
import CommentForm from '../components/CommentForm';
import { fetchComments, fetchPerfume, likePerfume } from '../actions';
import LikePerfumeButton from '../components/LikePerfumeButton'

class PerfumeShow extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      perfume: {}
    }
  }

  handleOnClick = () => {
    this.props.likePerfume(this.state.perfume)
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

        <div className="like-button">
          <br></br><br></br>
          <LikePerfumeButton perfume={perfume} likePerfume={this.handleOnClick} />
        </div>

        <div className="comments">
          <br></br><br></br><br></br>
          <CommentsList comments={comments} />
          <br></br><br></br>
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

export default connect(mapStateToProps, { fetchPerfume, fetchComments, likePerfume })(PerfumeShow);