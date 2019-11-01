import React from 'react';
import { Button } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';

class LikeButton extends React.Component {

  render() {
    return (
      <div>
        <Button
          className="btn btn-dark"
          onClick={this.props.likePerfume}>
          <h4>Likes:<Badge>{this.props.perfume.likes}</Badge></h4>
          <h6>Click to Like</h6>
        </Button>
      </div>
    )
  }
}

export default LikeButton;