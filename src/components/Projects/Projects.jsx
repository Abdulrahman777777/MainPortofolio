import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Projections = () => {
  const controls = useAnimation();
  const sec = useRef(null);
  const view = useInView(sec, { once: true });
  useEffect(() => {
    if (view) {
      controls.start("visible");
    }
  }, [view]);
  return (
    <section className="w-screen h-screen bg-Dark">
      <div className="Text w-screen h-40  flex justify-center items-center overflow-hidden">
        <motion.h2
          variants={{
            initial: { y: 160 },
            visible: { y: [160, 0, -30, 0] },
          }}
          initial="initial"
          animate={controls}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="font-Display tracking-Projects w-screen text-9xl text-center hover:tracking-Projects2 cursor-pointer text-white"
        >
          Projects
        </motion.h2>
      </div>
      <div className="blow w-screen h-60">
        <>
          <motion.svg
            width="1246"
            height="366"
            viewBox="0 0 1246 366"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={sec}
            className="h-blow"
          >
            <g id="that will blow your mind">
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="d"
                d="M1237.99 339.766L1237.99 339.757C1241.93 333.025 1243.9 325.713 1243.9 317.85V297.75C1243.9 289.888 1241.93 282.624 1237.99 275.989C1234.06 269.27 1228.73 263.937 1222.01 260.008C1215.37 256.069 1208.11 254.1 1200.25 254.1H1161.7H1160.2V255.6V360V361.5H1161.7H1200.25C1208.11 361.5 1215.37 359.531 1222.01 355.593C1228.72 351.666 1234.06 346.386 1237.99 339.766ZM1217.64 267.392L1217.64 267.392L1217.65 267.398C1223.13 270.571 1227.44 274.837 1230.61 280.212C1233.77 285.577 1235.35 291.413 1235.35 297.75V317.85C1235.35 324.186 1233.77 330.023 1230.61 335.388C1227.44 340.763 1223.13 345.029 1217.65 348.202L1217.64 348.208C1212.27 351.37 1206.44 352.95 1200.1 352.95H1168.75V262.65H1200.1C1206.44 262.65 1212.27 264.23 1217.64 267.392Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 12,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="n"
                d="M1070.46 360V361.5H1071.96H1077.51H1079.01V360V266.358L1149.21 334.832V360V361.5H1150.71H1156.26H1157.76V360V255.6V254.1H1156.26H1150.71H1149.21V255.6V322.852L1078.86 254.524L1078.42 254.1H1077.81H1071.96H1070.46V255.6V360Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 10.4,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="i2"
                d="M1059.63 255.6V254.1H1058.13H990.479H988.979V255.6V261.15V262.65H990.479H1020.03V352.95H990.479H988.979V354.45V360V361.5H990.479H1058.13H1059.63V360V354.45V352.95H1058.13H1028.43V262.65H1058.13H1059.63V261.15V255.6Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 10.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="m"
                d="M899.093 361.5H900.593V360V271.635L931.989 326.99L932.42 327.75H933.293H938.543H939.417L939.848 326.99L970.793 272.389V360V361.5H972.293H977.843H979.343V360V255.6V254.1H977.843H972.293H971.417L970.987 254.863L935.991 316.902L900.848 254.861L900.418 254.1H899.543H893.543H892.043V255.6V360V361.5H893.543H899.093Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 10.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="r"
                d="M781.907 257.691L781.902 257.688C779.168 256.426 776.14 255.541 772.831 255.022C769.614 254.402 765.772 254.1 761.323 254.1H721.573H720.073V255.6V360V361.5H721.573H727.123H728.623V360V325.65H764.773H764.797L764.82 325.649L768.817 325.524L794.001 360.87L794.45 361.5H795.223H801.823H804.743L803.042 359.126L777.715 323.782C784.51 321.532 790.152 317.503 794.61 311.718C799.612 305.257 802.123 297.934 802.123 289.8C802.123 282.826 800.298 276.448 796.644 270.703C793.087 264.952 788.162 260.61 781.907 257.691ZM789.159 274.857L789.165 274.866L789.171 274.876C792.104 279.323 793.573 284.284 793.573 289.8C793.573 294.736 792.343 299.272 789.882 303.437C787.41 307.619 784.092 310.937 779.91 313.409C775.745 315.87 771.21 317.1 766.273 317.1H728.623V262.65H761.323C768.337 262.65 773.608 263.444 777.245 264.934C782.377 267.122 786.332 270.428 789.159 274.857Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 10.2,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="u"
                d="M627.938 254.1H626.438V255.6V320.1C626.438 327.963 628.407 335.275 632.343 342.007L632.348 342.016C636.276 348.632 641.556 353.912 648.172 357.84L648.181 357.845C654.913 361.781 662.224 363.75 670.088 363.75C677.95 363.75 685.213 361.781 691.849 357.843C698.564 353.916 703.897 348.636 707.828 342.016L707.833 342.007C711.768 335.275 713.738 327.963 713.738 320.1V255.6V254.1H712.238H706.688H705.188V255.6V320.1C705.188 326.436 703.607 332.273 700.446 337.638C697.275 343.019 693.007 347.287 687.626 350.458C682.261 353.62 676.424 355.2 670.088 355.2C663.751 355.2 657.915 353.62 652.549 350.458C647.168 347.287 642.901 343.019 639.73 337.638C636.568 332.273 634.988 326.436 634.988 320.1V255.6V254.1H633.488H627.938Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 9.6,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="o2"
                d="M559.19 357.841L559.197 357.846L559.204 357.85C566.038 361.784 573.497 363.75 581.553 363.75C589.609 363.75 597.068 361.784 603.901 357.85L603.909 357.846L603.916 357.841C610.735 353.812 616.119 348.378 620.048 341.556C624.085 334.722 626.103 327.261 626.103 319.2V296.4C626.103 288.339 624.085 280.878 620.048 274.044C616.118 267.221 610.732 261.835 603.909 257.904C597.075 253.868 589.613 251.85 581.553 251.85C573.492 251.85 566.03 253.868 559.197 257.904C552.375 261.834 546.941 267.218 542.911 274.037L542.907 274.044L542.903 274.052C538.968 280.885 537.003 288.344 537.003 296.4V319.2C537.003 327.256 538.968 334.715 542.903 341.548L542.907 341.556L542.911 341.563C546.94 348.381 552.372 353.813 559.19 357.841ZM612.659 337.341L612.655 337.348C609.488 342.818 605.127 347.182 599.548 350.454C594.085 353.616 588.097 355.2 581.553 355.2C575.013 355.2 568.974 353.618 563.408 350.454C557.932 347.185 553.568 342.82 550.299 337.345C547.135 331.779 545.553 325.74 545.553 319.2V296.4C545.553 289.856 547.137 283.868 550.299 278.405C553.57 272.826 557.935 268.465 563.404 265.298L563.404 265.298L563.411 265.294C568.978 262.031 575.016 260.4 581.553 260.4C588.089 260.4 594.073 262.03 599.534 265.288L599.548 265.296L599.561 265.304C605.127 268.47 609.482 272.826 612.649 278.392L612.657 278.405L612.665 278.418C615.922 283.88 617.553 289.864 617.553 296.4V319.2C617.553 325.737 615.922 331.774 612.659 337.341Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 9,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="y"
                d="M457.367 254.77L456.922 254.1H456.118H449.518H446.726L448.267 256.428L488.818 317.701V360V361.5H490.318H495.868H497.368V360V317.7L537.77 256.426L539.303 254.1H536.518H529.918H529.109L528.665 254.775L493.163 308.681L457.367 254.77Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 8.4,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-red-700 transition-all cursor-pointer"
                id="w"
                d="M366.896 255.989L367.403 254.1H365.447H359.747H358.596L358.298 255.212L334.542 343.874L320.246 290.91L320.245 290.909L310.646 255.21L310.347 254.1H309.197H303.497H301.541L302.049 255.99L311.544 291.299L297.353 343.874L273.596 255.212L273.298 254.1H272.147H266.447H264.491L264.999 255.989L293.049 360.389L293.347 361.5H294.497H300.347H301.497L301.796 360.389L315.947 307.73L330.099 360.389L330.397 361.5H331.547H337.397H338.547L338.846 360.389L366.896 255.989Z"
                stroke="#FF0000"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                  hover: { scale: 1.5, pathLength: 0.8 },
                }}
                transition={{
                  duration: 5,
                  delay: 4.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-red-700 transition-all cursor-pointer"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 4.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
                id="o"
                d="M205.049 357.841L205.056 357.846L205.064 357.85C211.897 361.784 219.356 363.75 227.412 363.75C235.468 363.75 242.927 361.784 249.761 357.85L249.768 357.846L249.775 357.841C256.594 353.812 261.978 348.378 265.908 341.556C269.944 334.722 271.962 327.261 271.962 319.2V296.4C271.962 288.339 269.944 280.878 265.908 274.044C261.978 267.221 256.591 261.835 249.768 257.904C242.935 253.868 235.473 251.85 227.412 251.85C219.351 251.85 211.89 253.868 205.056 257.904C198.234 261.834 192.8 267.218 188.771 274.037L188.766 274.044L188.762 274.052C184.828 280.885 182.862 288.344 182.862 296.4V319.2C182.862 327.256 184.828 334.715 188.762 341.548L188.766 341.556L188.771 341.563C192.799 348.381 198.231 353.813 205.049 357.841ZM258.518 337.341L258.514 337.348C255.347 342.818 250.987 347.182 245.407 350.454C239.944 353.616 233.956 355.2 227.412 355.2C220.872 355.2 214.833 353.618 209.267 350.454C203.792 347.185 199.427 342.82 196.158 337.345C192.994 331.779 191.412 325.74 191.412 319.2V296.4C191.412 289.856 192.996 283.868 196.158 278.405C199.43 272.826 203.794 268.465 209.264 265.298L209.264 265.298L209.271 265.294C214.838 262.031 220.876 260.4 227.412 260.4C233.949 260.4 239.932 262.03 245.394 265.288L245.407 265.296L245.42 265.304C250.986 268.47 255.342 272.826 258.508 278.392L258.516 278.405L258.524 278.418C261.782 283.88 263.412 289.864 263.412 296.4V319.2C263.412 325.737 261.782 331.774 258.518 337.341Z"
                stroke="#FF0000"
                stroke-width="3"
              />
              <motion.path
                className="hover:fill-red-700 transition-all cursor-pointer"
                id="l3"
                d="M105.127 360V361.5H106.627H184.927H186.427V360V354.45V352.95H184.927H113.677V255.6V254.1H112.177H106.627H105.127V255.6V360Z"
                stroke="#FF0000"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 4.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-red-700 transition-all cursor-pointer"
                id="b"
                d="M76.5601 357.717L76.5665 357.713L76.5728 357.71C81.1137 355.175 84.7534 351.583 87.4832 346.963C90.2222 342.328 91.5918 337.263 91.5918 331.8C91.5918 325.674 89.7361 320.066 86.0538 315.016C83.0316 310.871 79.3463 307.768 75.0063 305.738C78.4793 303.426 81.2907 300.525 83.4197 297.035C86.1636 292.601 87.5418 287.78 87.5418 282.6C87.5418 277.141 86.1742 272.169 83.424 267.722C80.7684 263.265 76.9515 259.781 72.0253 257.265C67.8335 255.115 62.3191 254.1 55.5918 254.1H13.8918H12.3918V255.6V360V361.5H13.8918H57.6918C62.2423 361.5 65.9651 361.198 68.8172 360.564C71.6404 359.937 74.2246 358.991 76.5601 357.717ZM68.271 300.308L68.2624 300.313L68.2538 300.317C65.4453 301.767 61.5604 302.55 56.4918 302.55H20.7918V262.65H53.7918C60.3693 262.65 64.8009 263.258 67.2991 264.328C70.7245 265.81 73.5563 268.169 75.8047 271.448L75.8105 271.457L75.8164 271.465C78.019 274.585 79.1418 278.276 79.1418 282.6C79.1418 286.429 78.1654 289.905 76.2156 293.062C74.2632 296.223 71.6236 298.632 68.271 300.308ZM79.9679 320.592L79.9728 320.6L79.9778 320.608C82.1153 323.953 83.1918 327.72 83.1918 331.95C83.1918 335.977 82.1662 339.71 80.1069 343.176C78.0504 346.538 75.3087 349.091 71.8636 350.862C70.4192 351.583 68.6634 352.144 66.5735 352.524C64.5022 352.901 61.6048 353.1 57.8418 353.1H20.7918V310.95H59.7918C64.7795 310.95 68.5843 311.638 71.3074 312.909L71.3132 312.912C74.943 314.587 77.8203 317.137 79.9679 320.592Z"
                stroke="#FF0000"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 4.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-red-700 transition-all cursor-pointer"
                id="fire"
                d="M6 255L86 183L110 235L158 183L190 255L250 183L318 255L342 183L366 255H6Z"
                stroke="#FF0000"
                stroke-width="4"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 7.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="l2"
                d="M897.093 107.4V108.9H898.593H976.893H978.393V107.4V101.85V100.35H976.893H905.643V3V1.5H904.143H898.593H897.093V3V107.4Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 4.2,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="l"
                d="M808.558 107.4V108.9H810.058H888.358H889.858V107.4V101.85V100.35H888.358H817.108V3V1.5H815.608H810.058H808.558V3V107.4Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 3.6,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="i"
                d="M789.173 3V1.5H787.673H720.023H718.523V3V8.55V10.05H720.023H749.573V100.35H720.023H718.523V101.85V107.4V108.9H720.023H787.673H789.173V107.4V101.85V100.35H787.673H757.973V10.05H787.673H789.173V8.55V3Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 3,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="w_2"
                d="M716.187 3.38921L716.694 1.5H714.738H709.038H707.887L707.589 2.61178L683.833 91.2742L669.536 38.3105L669.536 38.3091L659.936 2.61048L659.638 1.5H658.488H652.788H650.831L651.339 3.38952L660.834 38.6993L646.643 91.2742L622.887 2.61178L622.589 1.5H621.438H615.738H613.782L614.289 3.38921L642.339 107.789L642.638 108.9H643.788H649.638H650.788L651.087 107.789L665.238 55.1298L679.389 107.789L679.688 108.9H680.838H686.688H687.838L688.137 107.789L716.187 3.38921Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 2.4,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="t2"
                d="M535.406 15.6V14.1H533.906H449.605H448.105V15.6V21.15V22.65H449.605H487.555V120V121.5H489.055H494.456H495.956V120V22.65H533.906H535.406V21.15V15.6Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 1.8,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="a"
                d="M400.37 14.1H399.365L398.983 15.0299L356.083 119.43L355.232 121.5H357.47H363.32H364.324L364.707 120.573L378.574 87H428.013L441.732 120.567L442.113 121.5H443.12H449.12H451.358L450.508 119.43L407.608 15.0299L407.226 14.1H406.22H400.37ZM382.053 78.6L403.225 26.7567L424.532 78.6H382.053Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 1.2,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="h"
                d="M272.985 120V121.5H274.485H280.035H281.535V120V72H347.835V120V121.5H349.335H354.885H356.385V120V15.6V14.1H354.885H349.335H347.835V15.6V63.45H281.535V15.6V14.1H280.035H274.485H272.985V15.6V120Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 0.6,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
              <motion.path
                className="hover:fill-slate-200 transition-all cursor-pointer"
                id="t"
                d="M269.8 15.6V14.1H268.3H184H182.5V15.6V21.15V22.65H184H221.95V120V121.5H223.45H228.85H230.35V120V22.65H268.3H269.8V21.15V15.6Z"
                stroke="white"
                stroke-width="3"
                variants={{
                  initial: { pathLength: 0 },
                  visible: { pathLength: [0, 1, 0.8, 1] },
                }}
                transition={{
                  duration: 5,
                  delay: 0,
                  ease: "circInOut",
                  bounce: 1,
                }}
                initial="initial"
                animate={controls}
              />
            </g>
          </motion.svg>
        </>
      </div>
    </section>
  );
};

export default Projections;
