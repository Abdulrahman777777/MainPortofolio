import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Footer = ({ view, settextCursor }) => {
  const [scope, animate] = useAnimate();
  return (
    <motion.footer
      ref={scope}
      variants={{
        initial: { y: 200 },
        visible: {
          y: 0,
          transition: { duration: 0.5, delay: 0.2, ease: "easeIn" },
        },
      }}
      initial="initial"
      viewport={{ once: true }}
      whileInView={"visible"}
      className="h-40 bg-blue w-screen rounded-tl-3xl rounded-tr-3xl flex cursor-none flex-wrap"
    >
      <div className="page-routing  notime:h-30 notime:flex">
        <div className="navigate ">
          <h4 className="pl-5 pt-5 text-4xl text-white font-anton tracking-wider">
            Navigate:
          </h4>
        </div>
        <div className="navigation flex pt-5 flex-wrap ">
          <div className="projects pl-8 pb-2">
            <motion.button
              onHoverStart={() => {
                settextCursor("");
                animate(".button", { backgroundColor: "#0b3c8a" });
              }}
              onHoverEnd={() => {
                animate(".button", { backgroundColor: "#1E293B" });
                settextCursor("footer");
              }}
              className="button cursor-none bg-blueShade p-1 rounded-2xl text-white font-anton tracking-wider"
            >
              <Link
                to={"Projects"}
                className="cursor-none"
                location={useLocation()}
                key={useLocation().pathname}
              >
                {" "}
                Projects
              </Link>
            </motion.button>
          </div>
          <div className="contacts pl-8">
            <motion.button
              onHoverStart={() => {
                settextCursor("");
                animate(".button2", { backgroundColor: "#0b3c8a" });
              }}
              onHoverEnd={() => {
                animate(".button2", { backgroundColor: "#1E293B" });
                settextCursor("footer");
              }}
              className="button2 bg-blueShade cursor-none p-1 rounded-2xl text-white font-anton tracking-wider"
            >
              Contact
            </motion.button>
          </div>
        </div>
      </div>
      <div className="Copyright notime:h-60  pl-8 left-10 relative h-full flex justify-center items-center font-anton tracking-wider text-white">
        <span className="text-footer">Copyright © all rights reserved</span>
      </div>
    </motion.footer>
  );
};

export default Footer;
