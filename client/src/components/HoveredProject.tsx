import { IProject } from "../types/types";

const HoveredProject = ({ project }: { project: IProject }) => {
  return <div>{project.title}</div>;
};

export default HoveredProject;
