export default function commentsReducer(state = [], action) {
  switch (action.type) {

    case 'FETCH_COMMENTS':
      return action.comments;

    case "ADD_COMMENT":{
      // debugger;
      return state.concat(action.comment)
    }

  default:
    return state
  }
}