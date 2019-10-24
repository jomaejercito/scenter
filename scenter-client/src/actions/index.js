const API_URL = 'http://localhost:3000/api/v1'

// export function fetchPerfumes(action) {
//   return(dispatch) => {
//     fetch(`${API_URL}/perfumes/`)
//     .then(response => response.json())
//     .then(perfumes => dispatch({
//       type: 'FETCH_PERFUMES',
//       payload: perfumes
//     }))
//   }  
// }

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