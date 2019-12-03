import React from 'react';

class SearchBar extends React.Component {

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
               
              />
              <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;