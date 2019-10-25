export default function perfumesReducer(state = [], action) {
  switch (action.type) {

    case 'FETCH_PERFUMES':
      return action.perfumes;

  default:
    return state    
  }
}