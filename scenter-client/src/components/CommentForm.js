import React from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup } from 'react-bootstrap';
import { createComment } from '../actions';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      remark: '',
      commenter: '',
      perfume_id: this.props.perfumeId
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      remark: '',
      commenter: ''
    })
  }


  render(){
    return (
      <div className="comment-form">
        <h4>Leave a Comment or a Review:</h4>
          <form onSubmit={this.handleOnSubmit}>
            <FormGroup>
              <label>Comment:</label>
              <FormControl
                type="text"
                name="remark"
                value={this.state.remark}
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

export default connect(null, { createComment })(CommentForm)