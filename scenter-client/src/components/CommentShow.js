import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const CommentShow = ({ comment }) => {
  return (
    <div className="list-group">
      <ListGroup>
        <ListGroupItem>{comment.remark} <br></br> - {comment.commenter}</ListGroupItem><br></br>
      </ListGroup>
    </div>
  )
}

export default CommentShow;