import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../footer";

const Answers = ({ settextCursor, cursorControls }) => {
  const section = useRef(null);
  const view = useInView(section, { once: true });
  useEffect(() => {
    if (!view) {
      settextCursor("");
      cursorControls.start("initial");
    }
  }, [view]);
  return (
    <motion.section className="w-screen h-screen" ref={section}>
      <motion.div
        className="text w-screen h-60 flex justify-center items-center"
        onHoverEnd={() => {
          cursorControls.start("initial");
          settextCursor("Footer");
        }}
        onHoverStart={() => {
          cursorControls.start("visible");
          settextCursor(
            <Typewriter
              words={["Who?", "doesn't", "want", "fancy", "animations"]}
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
        whileTap={() => {
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
      >
        <h1 className="text-blue font-anton tracking-wider ">
          Click if you're on mobile
          <br />
          Scroll up and Click to remove the effect.
        </h1>
      </motion.div>
      <Footer view={view} settextCursor={settextCursor} />
    </motion.section>
  );
};

export default Answers;
