import { motion, useScroll, useTransform } from "framer-motion";
import Dark from "../components/Projects/Dark";
import Projections from "../components/Projects/Projects";
import ProjectDisplay from "../components/Projects/ProjectDisplay";

const Projects = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.5, 1], [0, -window.innerWidth]);
  const y = useTransform(scrollYProgress, [0.5, 1], [0, window.innerHeight]);
  return (
    <div className="cursor-default h-threeScreen overflow-hidden">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, delay: 0.2, ease: "circOut" }}
        className="push-out w-screen h-screen bg-blueShades origin-bottom fixed z-50"
      ></motion.div>
      <Dark />
      <motion.div className="horizontal-scroll flex" style={{ x: x, y: y }}>
        <Projections />
        <ProjectDisplay />
      </motion.div>
    </div>
  );
};

export default Projects;
