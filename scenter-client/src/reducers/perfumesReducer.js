export default function perfumesReducer(state = [], action) {
  switch (action.type) {

    case 'FETCH_PERFUMES':
      return action.perfumes;


    case 'LIKE_PERFUME':
      return state.map((perfume) => {
        if (perfume.id === action.perfume.id) {
          return action.perfume
        } else {
          return perfume
      }
    })   

  default:
    return state    
  }
}