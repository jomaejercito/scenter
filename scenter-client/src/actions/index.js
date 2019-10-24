const API_URL = 'http://localhost:3001/api/v1'

export function fetchPerfumes(action) {
  return(dispatch) => {
    fetch(`${API_URL}/perfumes/`)
    .then (response => response.json())
    .then(perfumes => dispatch({
      type: 'FETCH_PERFUMES',
      payload: perfumes
    }))
  }  
}