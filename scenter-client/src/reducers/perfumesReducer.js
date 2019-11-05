export default function perfumesReducer(state = [], action) {
  switch (action.type) {

    case 'FETCH_PERFUMES':{
      const { perfumes } = action; 
      return perfumes;
    }

    case 'LIKE_PERFUME':
      return state.map((perfume) => {
        if (perfume.id === action.perfume.id) {
          return action.perfume
        } else {
          return perfume
      }
    })  

    case 'FETCH_TOP_PERFUMES': {
      const { perfumes } = action;
      perfumes.sort((a,b) => { 
        return b.likes - a.likes 
      })
      const topPerfumes = perfumes.slice(0, 10)
        return topPerfumes;
    }


  default:
    return state    
  }
}