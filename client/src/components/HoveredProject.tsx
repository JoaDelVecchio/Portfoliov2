import { motion } from "framer-motion";
import { IProject } from "../types/types";

const HoveredProject = ({ project }: { project: IProject }) => {
  return (
    <motion.video
      src={project.video}
      className="hidden h-auto w-full rounded-xl shadow-lg md:block"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  );
};

export default HoveredProject;
