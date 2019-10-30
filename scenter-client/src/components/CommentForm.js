import React from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup } from 'react-bootstrap';
import { addComment } from '../actions';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comment: '' ,
      commenter: '',
      perfumeId: this.props.perfumeId
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      comment: '',
      commenter: ''
    })
  }


  render(){
    return (
      <div className="comment-form">
        <p>Add Comment:</p>
          <form onSubmit={this.handleOnSubmit}>
            <FormGroup>
              <label>Comment:</label>
              <FormControl
                type="text"
                name="comment"
                value={this.state.comment}
                onChange={this.handleOnChange}
              />

              <label>Name:</label>
              <FormControl
                type="text"
                name="commenter"
                value={this.state.commenter}
                onChange={this.handleOnChange}
              />
              <br></br>

              <button className="btn btn-dark" type="submit">Submit</button>
            </FormGroup>
          </form>  
        </div>
    )
  }  

}

export default connect(null, { addComment })(CommentForm)