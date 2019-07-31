import Firebase from '../components/Firebase'

const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = (snapshot) => dispatch => {
  dispatch({
    type: 'FETCH_POSTS',
    payload: snapshot
  });
};
