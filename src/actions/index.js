import { projects } from "../components/firebase";

export const addProject = newProject => async dispatch => {
  projects.push().set(newProject);
};

export const deleteProject = projectId => async dispatch => {
  projects.child(projectId).remove();
};

export const getProjects = () => ({
  type: "FETCH_PROJECTS"
});
