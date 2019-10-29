import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const CommentShow = ({ comment }) => {
  return (
    <div className="list-group">
      <ListGroup>
        <ListGroupItem>{comment.comment} <br></br> - {comment.commenter}</ListGroupItem>
      </ListGroup>
    </div>
  )
}

export default CommentShow;