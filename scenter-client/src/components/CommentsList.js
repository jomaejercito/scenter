import React from 'react';
import CommentShow from './CommentShow';
import { ListGroup } from 'react-bootstrap';

const CommentsList = ({ comments }) => {

  
  const renderComments = comments != null  && comments.length > 0 ? comments.map(comment =>
    <CommentShow key={comment.id} comment={comment} />
  ) : null;

  return (
    <div className="comments">
      <h3>Comments:</h3>
      <ListGroup>
        {renderComments}
      </ListGroup>
    </div>
  )
}

export default CommentsList;