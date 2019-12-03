import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      perfumeName: '',
      perfume_id: this.props.perfumeId
    }
  }
  
  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleOnSubmit = (event) => {
    event.preventDefault()
    const newItem = document.getElementById("addInput");
    this.props.submitSearch(newItem.value)
  }
   
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleOnSubmit} className="ui form">
          <div className="field">
            <label>Perfume Search</label>
              <input 
                id="addInput"
                type="text" 
                onChange={this.handleOnChange}
              />
              <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;