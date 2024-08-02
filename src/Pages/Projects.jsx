import { motion, useScroll, useTransform } from "framer-motion";
import Dark from "../components/Projects/Dark";
import Projections from "../components/Projects/Projects";
import ProjectDisplay from "../components/Projects/ProjectDisplay";
import FooterPro from "../components/FooterProj";
import { useEffect } from "react";

const Projection = () => {
  if (window.innerWidth > 812) {
    return <Projections />;
  } else {
    return null;
  }
};

const Projects = () => {
  useEffect(() => window.scroll(0, 0));
  return (
    <div className="cursor-default bg-Dark">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, delay: 0.2, ease: "circOut" }}
        className="push-out w-screen h-screen bg-blueShades origin-bottom fixed z-50"
      ></motion.div>
      <Dark />
      <Projection />
      <ProjectDisplay />
      <FooterPro />
    </div>
  );
};

export default Projects;
