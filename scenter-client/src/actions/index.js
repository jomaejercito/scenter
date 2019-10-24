const API_URL = 'http://localhost:3000/api/v1'

const setPerfumes = perfumes => {
  return {
    type: 'FETCH_PERFUMES',
    perfumes
  }
}

export const fetchPerfumes = () => {
  return dispatch => {
    dispatch({type: 'LOADING_PERFUMES'});
      return fetch(`${API_URL}/perfumes/`)
      .then(response => response.json())
      .then(perfumes => dispatch(setPerfumes(perfumes)))
      .catch(error => console.log(error))
  }
}

export const fetchPerfume = (perfumeId) => {
  return dispatch => {
    dispatch({type: 'LOADING_PERFUMES'});
      return fetch(`${API_URL}/perfumes/${perfumeId}`)
      .then(response => response.json())
      .then(perfume => dispatch(setPerfumes(perfume)))
      .catch(error => console.log(error))
  }
}