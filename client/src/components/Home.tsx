import { useHoveredContext } from "../context/HoveredProjectContextProvider";
import HoveredProject from "./HoveredProject";

const Home = () => {
  const { hoveredProject } = useHoveredContext();
  return (
    <div className="flex min-h-full w-full items-center">
      {hoveredProject ? (
        <HoveredProject project={hoveredProject} />
      ) : (
        <div>Im joaquin</div>
      )}
    </div>
  );
};

export default Home;
