import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

const Answers = ({ settextCursor, cursorControls }) => {
  const section = useRef(null);

  const text = useRef(null);
  const view = useInView(section, { once: false });
  console.log(
    <Typewriter
      ref={text}
      words={["something", "hello"]}
      cursor
      cursorBlinking={true}
      cursorStyle="!"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      loop={false}
    />
  );
  useEffect(() => {
    if (view) {
    }
  });
  return (
    <motion.section
      className="w-screen h-screen flex justify-center items-center"
      ref={section}
      onHoverStart={() => {
        cursorControls.start("visible");
        settextCursor(
          <Typewriter
            words={[
              "Well!",
              "It's just",
              "to",
              "Impress",
              "Friends,",
              "and don't",
              "forget",
              "Family!",
            ]}
            cursor
            cursorBlinking={true}
            cursorStyle="!"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={false}
          />
        );
      }}
      onClick={() => {
        cursorControls.start("visible");
        settextCursor(
          <Typewriter
            words={[
              "Well!",
              "It's just",
              "to",
              "Impress",
              "Friends,",
              "and don't",
              "forget",
              "Family!",
            ]}
            cursor
            cursorBlinking={true}
            cursorStyle="!"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={false}
          />
        );
      }}
      onHoverEnd={() => {
        cursorControls.start("initial");
        settextCursor("");
      }}
    >
      <h1 className="text-blue font-anton tracking-wider">
        Click if you're on mobile
      </h1>
    </motion.section>
  );
};

export default Answers;
