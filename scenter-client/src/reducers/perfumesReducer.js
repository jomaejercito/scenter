export default function perfumesReducer(state = {perfumes: []}, action) {
  switch (action.type){
    case 'FETCH_PERFUMES':
      return {perfumes: action.payload}
  default:
    return state    
  }
}