import { projects } from "../data/projects";

const NavBar = () => {
  return (
    <ul className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg">
      {projects.map((project) => (
        <li
          className="flex w-60 justify-between p-4 duration-200 hover:scale-105 hover:rounded-full hover:font-medium hover:shadow-lg hover:backdrop-blur-lg"
          key={project.id}
        >
          <span>{project.title}</span>
          <span className="text-gray-400">{project.year}</span>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
