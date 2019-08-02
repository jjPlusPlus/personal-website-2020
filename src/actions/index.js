import { projectsRef } from "../components/firebase";

export const addProject = (newProject) => ({
  type: "ADD_PROJECT",
  payload: { newProject }
});
export const deleteProject = (projectId) => ({
  type: "DELETE_PROJECT",
  payload: { projectId }
});
export const getProjects = () => ({
  type: "FETCH_PROJECTS"
});

export const addPost = (newPost) => ({
  type: "ADD_POST",
  payload: { newPost }
});
export const deletePost = (postId) => ({
  type: "DELETE_POST",
  payload: postId
});
export const getPosts = () => ({
  type: "FETCH_POSTS"
});


// projectsRef.push().set(newProject);
// projectsRef.child(projectId).remove();
