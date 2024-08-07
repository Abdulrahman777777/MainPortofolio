import { motion } from "framer-motion";

const Dark = () => {
  const letterVariant = {
    initial: { x: -540 },
    visible: { x: [-540, 0, 20, 0] },
  };
  const letterVariant2 = {
    initial: { x: 1500 },
    visible: { x: [1500, 0, 20, 0] },
  };
  const sectionVariant = {
    initial: { backgroundColor: "white" },
    visible: { backgroundColor: "#252525" },
  };

  return (
    <motion.section
      variants={sectionVariant}
      initial="initial"
      animate="visible"
      transition={{ duration: 1, delay: 2.6 }}
      className="dark w-screen h-screen flex justify-center items-center  overflow-hidden flex-wrap"
    >
      <div className="text text-7xl font-anton tracking-widest">
        <h1 className="text-blue flex">
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 1.5, ease: "circOut" }}
          >
            G
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 1.6, ease: "circOut" }}
          >
            o
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 1.7, ease: "circOut" }}
          >
            i
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 1.8, ease: "circOut" }}
          >
            n
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 1.9, ease: "circOut" }}
          >
            g
          </motion.p>
          &nbsp;&nbsp;
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 2, ease: "circOut" }}
          >
            D
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 2.1, ease: "circOut" }}
          >
            a
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 2.2, ease: "circOut" }}
          >
            r
          </motion.p>
          <motion.p
            variants={letterVariant}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.4, delay: 2.3, ease: "circOut" }}
          >
            k
          </motion.p>
          <motion.p
            initial={{ y: -900 }}
            animate={{ y: [-900, 0, 20, 0] }}
            transition={{ duration: 0.4, delay: 2.4, ease: "circOut" }}
          >
            .
          </motion.p>
        </h1>
        <h2 className="text-white flex">
          <motion.p
            variants={letterVariant2}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 2.6, ease: "circOut" }}
          >
            I
          </motion.p>
          &nbsp;&nbsp;
          <motion.p
            variants={letterVariant2}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 2.8, ease: "circOut" }}
          >
            g
          </motion.p>
          <motion.p
            variants={letterVariant2}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 2.9, ease: "circOut" }}
          >
            u
          </motion.p>
          <motion.p
            variants={letterVariant2}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 3, ease: "circOut" }}
          >
            e
          </motion.p>
          <motion.p
            variants={letterVariant2}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 3.1, ease: "circOut" }}
          >
            s
          </motion.p>
          <motion.p
            variants={letterVariant2}
            initial={"initial"}
            animate={"visible"}
            transition={{ duration: 0.6, delay: 3.2, ease: "circOut" }}
          >
            s
          </motion.p>
          <motion.p
            initial={{ y: -900 }}
            animate={{ y: [-900, 0, 20, 0] }}
            transition={{ duration: 0.4, delay: 3.3, ease: "circOut" }}
          >
            .
          </motion.p>
        </h2>
      </div>
      <div className="svg h-full w-1/2 flex justify-center items-center min-w-100 z-10">
        <motion.svg
          width="1021"
          height="934"
          viewBox="0 0 1021 934"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-seventy relative "
        >
          <g id="undraw_undraw_apps_bqvc_-1-_6le4 1">
            <motion.path
              id="Vector"
              d="M636.79 934H336.548C297.427 934 265.599 901.564 265.599 861.695V72.3052C265.599 32.4358 297.427 0 336.548 0H636.79C675.912 0 707.739 32.4358 707.739 72.3052V861.695C707.739 901.564 675.912 934 636.79 934Z"
              fill="#3B82F6"
            />
            <motion.path
              id="Vector_2"
              d="M637.096 914.486H336.242C306.887 914.486 283.006 890.148 283.006 860.233V69.3325C283.006 39.4174 306.887 15.0789 336.242 15.0789H637.096C666.45 15.0789 690.332 39.4174 690.332 69.3325V860.233C690.332 890.148 666.45 914.486 637.096 914.486Z"
              fill="black"
            />
            <motion.path
              id="Vector_3"
              d="M533.668 66.5242H437.929C426.891 66.5242 417.911 57.3727 417.911 46.1234C417.911 34.8741 426.891 25.7227 437.929 25.7227H533.668C544.706 25.7227 553.686 34.8741 553.686 46.1234C553.686 57.3727 544.706 66.5242 533.668 66.5242Z"
              fill="#3B82F6"
            />
            <g id="contents">
              <motion.path
                initial={{ y: -500 }}
                animate={{ y: [-500, 0, 40, 0] }}
                transition={{ duration: 0.5, delay: 3.6, ease: "circOut" }}
                id="Vector_4"
                d="M606.973 287.879H356.036C346.408 287.879 338.575 279.896 338.575 270.083V168.445C338.575 158.633 346.408 150.651 356.036 150.651H606.973C616.601 150.651 624.434 158.633 624.434 168.445V270.083C624.434 279.895 616.601 287.879 606.973 287.879Z"
                fill="#3B82F6"
              />
              <motion.path
                initial={{ y: -500 }}
                animate={{ y: [-350, 0, 40, 0] }}
                transition={{ duration: 0.5, delay: 3.8, ease: "circOut" }}
                id="Vector_5"
                d="M606.973 599.135H356.036C346.408 599.135 338.575 591.151 338.575 581.339V479.701C338.575 469.889 346.408 461.907 356.036 461.907H606.973C616.601 461.907 624.434 469.889 624.434 479.701V581.339C624.434 591.151 616.601 599.135 606.973 599.135Z"
                fill="#D8D8D8"
              />
              <motion.path
                id="Vector_6"
                d="M605.483 441.692H506.831C496.697 441.692 488.453 433.291 488.453 422.964V325.493C488.453 315.165 496.697 306.764 506.831 306.764H605.483C615.616 306.764 623.86 315.165 623.86 325.493V422.964C623.86 433.291 615.616 441.692 605.483 441.692Z"
                fill="#D8D8D8"
              />
              <motion.path
                id="Vector_7"
                d="M455.03 441.692H356.378C346.245 441.692 338.001 433.291 338.001 422.964V325.493C338.001 315.165 346.245 306.764 356.378 306.764H455.03C465.164 306.764 473.408 315.165 473.408 325.493V422.964C473.408 433.291 465.164 441.692 455.03 441.692Z"
                fill="#D8D8D8"
              />
            </g>
          </g>
        </motion.svg>
      </div>
    </motion.section>
  );
};

export default Dark;
