import Welcome from "../components/Welcome-section";
import OutOfTheBox from "../components/OutOfTheBox";
import Ideas from "./Ideas";
import { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Home = ({ color }) => {
  const [currentcursorX, setCurrentX] = useState(0);
  const [currentcursory, setCurrenty] = useState(0);
  const cursorControls = useAnimation();
  const cursor = useRef();
  const [textCursor, settextCursor] = useState("");

  return (
    <div
      className="home  overflow-hidden"
      onMouseMove={(event) => {
        const cursorX = event.clientX;
        const cursorY = event.clientY;
        setCurrentX(cursorX);
        setCurrenty(cursorY);
      }}
      onScroll={(event) => {
        const cursorX = event.clientX;
        const cursorY = event.clientY;
        setCurrentX(cursorX);
        setCurrenty(cursorY);
      }}
    >
      <motion.div
        variants={{
          initial: {
            scale: 1,
            transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
          },
          visible: {
            scale: 30,
            transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
          },
        }}
        initial={"initial"}
        animate={cursorControls}
        ref={cursor}
        style={{ x: currentcursorX - 50, y: currentcursory - 50 }}
        className="flex justify-center items-center circle rounded-full  h-100 min-w-100 max-w-100 fixed z-30 border-blue border-x-4 border-y-4 pointer-events-none"
      >
        <motion.h3
          className="cursor-none text-white font-anton  tracking-widest notime:text-1xl"
          variants={{
            initial: {
              scale: 1,
              transition: { duration: 0.5, delay: 0.5, ease: "easeOut" },
            },
            visible: {
              scale: 0.2,
              transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
            },
          }}
          initial={"initial"}
          animate={cursorControls}
        >
          {textCursor}
        </motion.h3>
      </motion.div>
      <Welcome settextCursor={settextCursor} />
      <OutOfTheBox
        className="outOfTheBox bg-transparent"
        color={color}
        settextCursor={settextCursor}
      />
      <Ideas settextCursor={settextCursor} cursorControls={cursorControls} />
    </div>
  );
};

export default Home;
