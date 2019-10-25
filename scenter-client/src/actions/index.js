const API_URL = 'http://localhost:3000/api/v1'

const setPerfumes = perfumes => {
  return {
    type: 'FETCH_PERFUMES',
    perfumes
  }
}

export const fetchPerfumes = () => {
  return dispatch => {
    return fetch(`${API_URL}/perfumes/`)
    .then(response => response.json())
    .then(perfumes => dispatch(setPerfumes(perfumes)))
    .catch(error => console.log(error))
  }
}