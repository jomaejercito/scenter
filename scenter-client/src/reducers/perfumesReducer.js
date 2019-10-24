export default function perfumesReducer(state = {perfumes: []}, action) {
  switch (action.type) {
    case 'LOADING_PERFUMES':
      return state

    case 'FETCH_PERFUMES':
      return {perfumes: action.perfumes}

    case 'FETCH_PERFUME':
      return {perfume: action.perfume}

  default:
    return state    
  }
}