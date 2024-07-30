import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

const ItBegs = () => {
  const textVariant = {
    initial: { y: -1100 },
    visible: (index) => ({
      y: 0,
      transition: { duration: 0.1, delay: 0.2 + 0.2 * index },
    }),
  };
  const itScope = useRef();
  const begsScope = useRef();
  const theScope = useRef();
  const QuestionScope = useRef();
  const WhyScope = useRef();
  const CreateScope = useRef();
  const InsaneScope = useRef();
  const AnimataionsScope = useRef();
  const ItControls = useAnimation();
  const begsControls = useAnimation();
  const TheControls = useAnimation();
  const QuestionControls = useAnimation();
  const WhyControls = useAnimation();
  const CreateControls = useAnimation();
  const InsaneControls = useAnimation();
  const AnimationsControls = useAnimation();
  const ItView = useInView(itScope, { once: true });
  const begsView = useInView(begsScope, { once: true });
  const TheView = useInView(theScope, { once: true });
  const QuestionView = useInView(QuestionScope, { once: true });
  const WhyView = useInView(WhyScope, { once: true });
  const CreateView = useInView(CreateScope, { once: true });
  const InsaneView = useInView(InsaneScope, { once: true });
  const AnimationsView = useInView(AnimataionsScope, { once: true });
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0.625, 0.875], [4000, -4000]);
  const y = useTransform(scrollYProgress, [0.625, 0.875], [-1100, 200]);
  useEffect(() => {
    if (ItView) {
      ItControls.start("visible");
    } else {
      ItControls.start("initial");
    }
  }, [ItView]);
  useEffect(() => {
    if (begsView) {
      begsControls.start("visible");
    } else {
      begsControls.start("initial");
    }
  }, [begsView]);
  useEffect(() => {
    if (TheView) {
      TheControls.start("visible");
    } else {
      TheControls.start("initial");
    }
  }, [TheView]);
  useEffect(() => {
    if (QuestionView) {
      QuestionControls.start("visible");
    } else {
      QuestionControls.start("initial");
    }
  }, [QuestionView]);
  useEffect(() => {
    if (WhyView) {
      WhyControls.start("visible");
    } else {
      WhyControls.start("initial");
    }
  }, [WhyView]);
  useEffect(() => {
    if (CreateView) {
      CreateControls.start("visible");
    } else {
      CreateControls.start("initial");
    }
  }, [CreateView]);
  useEffect(() => {
    if (InsaneView) {
      InsaneControls.start("visible");
    } else {
      InsaneControls.start("initial");
    }
  }, [InsaneView]);
  useEffect(() => {
    if (AnimationsView) {
      AnimationsControls.start("visible");
    } else {
      AnimationsControls.start("initial");
    }
  }, [AnimationsView]);

  return (
    <div className="begs w-screen h-fourScreen overflow-hidden flex justify-center items-center  cursor-none">
      <motion.div
        initial={{ x: -6000, y: -1700 }}
        style={{ x: x, y: y }}
        className="text  relative top-1/3  flex justify-center items-center w-screen  cursor-none"
      >
        <motion.h5
          className="text-Full flex w-full h-full  story-text  font-anton  cursor-none text-blueShade"
          ref={itScope}
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            custom={1}
            animate={ItControls}
          >
            I
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            custom={2}
            animate={ItControls}
          >
            t
          </motion.p>
          &nbsp;
        </motion.h5>
        <h5
          className="text-Full flex font-anton  cursor-none pointer-events-none text-blue"
          ref={begsScope}
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={begsControls}
            custom={1}
          >
            b
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={begsControls}
            custom={2}
          >
            e
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={begsControls}
            custom={3}
          >
            g
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={begsControls}
            custom={4}
          >
            s
          </motion.p>
          &nbsp;
        </h5>
        <h5
          ref={theScope}
          className="text-Full flex font-anton  cursor-none pointer-events-none text-blue"
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={TheControls}
            custom={1}
          >
            t
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={TheControls}
            custom={2}
          >
            h
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={TheControls}
            custom={3}
          >
            e
          </motion.p>
          &nbsp;&nbsp;
        </h5>
        <h5
          ref={QuestionScope}
          className="text-Full flex font-anton  cursor-none pointer-events-none text-blueShades"
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={1}
          >
            Q
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={2}
          >
            u
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={3}
          >
            e
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={4}
          >
            s
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={5}
          >
            t
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={6}
          >
            i
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={7}
          >
            o
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={QuestionControls}
            custom={8}
          >
            n
          </motion.p>
          &nbsp;&nbsp;
        </h5>
        <h5
          ref={WhyScope}
          className="text-Full flex   font-anton  cursor-none pointer-events-none text-gray-500"
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={WhyControls}
            custom={1}
          >
            W
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={WhyControls}
            custom={2}
          >
            h
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={WhyControls}
            custom={3}
          >
            y
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={WhyControls}
            custom={4}
          >
            ?
          </motion.p>
          &nbsp;&nbsp;
        </h5>
        <h5
          ref={CreateScope}
          className="text-Full flex   font-anton  cursor-none pointer-events-none text-blue"
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={CreateControls}
            custom={1}
          >
            C
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={CreateControls}
            custom={2}
          >
            r
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={CreateControls}
            custom={3}
          >
            e
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={CreateControls}
            custom={4}
          >
            a
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={CreateControls}
            custom={5}
          >
            t
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={CreateControls}
            custom={6}
          >
            e
          </motion.p>
          &nbsp;&nbsp;
        </h5>
        <h5
          ref={InsaneScope}
          className="text-Full flex   font-anton  cursor-none pointer-events-none text-blueShade"
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={InsaneControls}
            custom={1}
          >
            I
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={InsaneControls}
            custom={2}
          >
            n
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={InsaneControls}
            custom={3}
          >
            s
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={InsaneControls}
            custom={4}
          >
            a
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={InsaneControls}
            custom={5}
          >
            n
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={InsaneControls}
            custom={6}
          >
            e
          </motion.p>
          &nbsp;&nbsp;
        </h5>
        <h5
          ref={AnimataionsScope}
          className="text-Full flex   font-anton  cursor-none pointer-events-none text-blueShades"
        >
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={1}
          >
            A
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={2}
          >
            n
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={3}
          >
            i
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={4}
          >
            m
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={5}
          >
            a
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={6}
          >
            t
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={7}
          >
            i
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={8}
          >
            o
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={9}
          >
            n
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={10}
          >
            s
          </motion.p>
          <motion.p
            variants={textVariant}
            initial="initial"
            animate={AnimationsControls}
            custom={11}
          >
            ?
          </motion.p>
          &nbsp;&nbsp;
        </h5>
      </motion.div>
    </div>
  );
};

export default ItBegs;
