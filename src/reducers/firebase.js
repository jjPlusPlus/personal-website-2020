export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return { ...state, loading: true };
    case 'ADD_PROJECT':
      return { ...state }
    case 'DELETE_PROJECT':
      return { ...state }

    case 'FETCH_POSTS':
      return { ...state, loading: true };
    case 'ADD_POST':
      return { ...state }
    case 'DELETE_POST':
      return { ...state }

    case 'PROJECTS_RECEIVED':
      return { ...state, projects: action.payload, loading: false }
    case 'POSTS_RECEIVED':
      return { ...state, posts: action.payload, loading: false }

    case 'AUTHENTICATE':
      return { ...state, authenticating: true }
    case 'AUTHENTICATION_FAILED':
      return { ...state, authError: action.payload, authenticating: false }
    case 'USER_AUTHENTICATED':
      return { ...state, email: action.payload }

    default:
      return state;

  }
};
