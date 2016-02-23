import { projectsData } from '../data/projects';

export default function projects(state = projectsData.data, action) {
  switch (action.type) {
    default:
      return state;
  }
}
