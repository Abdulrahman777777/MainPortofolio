import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import Home from "./Pages/Home";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { scrollYProgress } = useScroll();
  const color = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [
      "#1E293B",
      "#0D2043",
      "#1E293B",
      "#3B82F6",
      "#ffff",
      "#ffff",
      "#ffff",
      "#ffff",
      "#0D2043",
    ]
  );
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <motion.div className="App relative">
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 2, ease: "circOut" }}
        className="popin w-screen h-screen bg-blue fixed z-40 -top-0 origin-bottom pointer-events-none"
      ></motion.div>
      <motion.div
        className="background w-screen h-screen fixed -z-10"
        style={{ backgroundColor: color }}
      ></motion.div>
      <Home className="absolute top-0 left-0 z-10 " color={color} />
    </motion.div>
  );
}

export default App;
