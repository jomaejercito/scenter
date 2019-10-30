import React from 'react';
import { FormControl, FormGroup } from 'react-bootstrap';
// import { createComment } from '../actions';

class CommentForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render(){
    return (
      <div className="comment-form">
        <p>Add Comment:</p>
          <form>
            <FormGroup>
              <label>Comment:</label>
              <FormControl
                type="text"
                name="comment"
              />

              <label>Name:</label>
              <FormControl
                type="text"
                name="commenter"
              />
              <br></br>

              <button className="btn btn-dark" type="submit">Submit</button>
            </FormGroup>
          </form>  
        </div>
    )
  }  

}

// export default connect(null, { createComment })(CommentForm)
export default CommentForm;