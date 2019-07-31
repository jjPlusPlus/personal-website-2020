// import {FETCH_POSTS} from '../actions';
export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return { ...state, loading: true };
    case 'PROJECTS_RECEIVED':  
      return { ...state, projects: action.payload, loading: false }
    default:
      return state;
  }
};
