export default function perfumesReducer(state = {perfumes: []}, action) {

  switch(action.type) {
    
    case 'LOADING_PERFUMES':
      return state

    case 'FETCH_PERFUMES':
      return action.perfumes
    
    case 'FETCH_PERFUME':
      return action.perfume

  default:
    return state;
  }
}