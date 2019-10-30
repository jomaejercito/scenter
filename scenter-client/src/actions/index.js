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

const setComments = comments => {
  return {
    type: 'FETCH_COMMENTS',
    comments
  }
}

export const fetchPerfume = (perfumeId) => {
  return dispatch => {
    return fetch(`${API_URL}/perfumes/${perfumeId}`)
    .then(response => response.json())
  }
}

export const fetchComments = (perfumeId) => {
  return dispatch => {
    return fetch(`${API_URL}/perfumes/${perfumeId}/comments/`)
    .then(response => response.json())
    .then(comments => dispatch(setComments(comments)))
    .catch(error => console.log(error))
  }
}

const addComment = comment => {
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export const createComment = (comment) => {
  return dispatch => {
    fetch(`${API_URL}/perfumes/${comment.perfumeId}/comments/`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
  }
}