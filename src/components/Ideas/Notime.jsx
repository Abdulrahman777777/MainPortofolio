import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import { easeIn } from "framer-motion/dom";
import { useRef, useEffect } from "react";

const Notime = ({ settextCursor }) => {
  const text = useRef(null);
  const textView = useInView(text, { once: true });
  const textControls = useAnimation();
  const timeControls = useAnimation();
  useEffect(() => {
    if (textView) {
      textControls.start("visible");
    }
  }, [textView]);
  return (
    <section className="notime h-screen w-screen flex flex-wrap items-center overflow-hidden cursor-none">
      <div className="notime-text w-full h-40">
        <h1 className="flex flex-wrap text-9xl notime:text-7xl tracking-widest justify-center items-center">
          <motion.p
            ref={text}
            variants={{ initial: { scale: 1000 }, visible: { scale: 1 } }}
            initial={"initial"}
            animate={textControls}
            transition={{ duration: 1 }}
            className="text-blue font-anton min-w-72"
          >
            I can do it&nbsp;
          </motion.p>
          <motion.p
            variants={{
              initial: { scale: 0.00001 },
              visible: { scale: 1 },
            }}
            initial="initial"
            animate={textControls}
            transition={{ duration: 1, delay: 1, ease: easeIn }}
            className="text-white font-anton"
          >
            in no
          </motion.p>
        </h1>
      </div>
      <div className="svgs h-60">
        <div className="clock-svg flex justify-center w-screen h-full ">
          <svg
            width="689"
            height="645"
            viewBox="0 0 689 645"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-half"
          >
            <path
              d="M284.502 485.254C405.586 485.254 503.743 387.096 503.743 266.012C503.743 144.929 405.586 46.7708 284.502 46.7708C163.418 46.7708 65.2603 144.929 65.2603 266.012C65.2603 387.096 163.418 485.254 284.502 485.254Z"
              fill="#E6E6E6"
            />
            <path
              d="M473.152 266.012C473.174 295.449 466.298 324.481 453.074 350.78C439.851 377.079 420.649 399.914 397.009 417.452C395.428 418.635 393.817 419.787 392.195 420.909C360.582 442.884 323.003 454.662 284.502 454.662C246.001 454.662 208.422 442.884 176.808 420.909C175.187 419.787 173.576 418.635 171.995 417.452C148.371 399.898 129.181 377.06 115.959 350.765C102.738 324.469 95.8522 295.445 95.8522 266.012C95.8522 236.58 102.738 207.556 115.959 181.26C129.181 154.964 148.371 132.127 171.995 114.573C173.576 113.39 175.187 112.237 176.808 111.116C208.422 89.1407 246.001 77.3627 284.502 77.3627C323.003 77.3627 360.582 89.1407 392.195 111.116C393.817 112.237 395.428 113.39 397.009 114.573C420.649 132.111 439.851 154.946 453.074 181.245C466.298 207.544 473.174 236.576 473.152 266.012Z"
              fill="white"
            />
            <path
              d="M284.502 438.346C379.68 438.346 456.836 361.19 456.836 266.012C456.836 170.835 379.68 93.6782 284.502 93.6782C189.324 93.6782 112.168 170.835 112.168 266.012C112.168 361.19 189.324 438.346 284.502 438.346Z"
              fill="#3B82F6"
            />
            <path
              d="M459.6 206.776C459.323 206.095 458.914 205.474 458.397 204.95C457.88 204.426 457.265 204.01 456.587 203.724C455.909 203.438 455.181 203.288 454.445 203.283C453.709 203.279 452.98 203.419 452.298 203.697L429.62 212.905C428.243 213.466 427.145 214.55 426.568 215.92C425.99 217.289 425.98 218.832 426.54 220.209C427.099 221.586 428.182 222.685 429.552 223.264C430.921 223.843 432.464 223.854 433.841 223.296L456.52 214.088C457.896 213.524 458.993 212.438 459.57 211.068C460.147 209.698 460.158 208.155 459.6 206.776Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M284.952 94.16C282.339 94.16 279.743 94.2284 277.159 94.3434C320.715 98.1708 361.188 118.412 390.378 150.966C419.568 183.52 435.291 225.953 434.363 269.667C433.436 313.382 415.925 355.109 385.381 386.395C354.836 417.682 313.54 436.187 269.861 438.163C274.835 438.595 279.866 438.828 284.952 438.828C330.657 438.828 374.491 420.672 406.81 388.353C439.129 356.034 457.286 312.2 457.286 266.494C457.286 220.788 439.129 176.954 406.81 144.636C374.491 112.317 330.657 94.16 284.952 94.16Z"
              fill="black"
            />
            <path
              d="M285.012 81.4415C283.525 81.4441 282.1 82.0359 281.049 83.0871C279.998 84.1383 279.406 85.5634 279.403 87.05V111.524C279.403 113.011 279.994 114.438 281.046 115.489C282.098 116.541 283.524 117.132 285.012 117.132C286.499 117.132 287.926 116.541 288.978 115.489C290.029 114.438 290.62 113.011 290.62 111.524V87.05C290.618 85.5634 290.026 84.1383 288.975 83.0871C287.923 82.0359 286.498 81.4441 285.012 81.4415Z"
              fill="white"
            />
            <path
              d="M397.009 114.573C395.428 113.39 393.817 112.237 392.195 111.116C391.223 111.052 390.25 111.244 389.374 111.671C388.497 112.098 387.748 112.747 387.199 113.553L373.422 133.774C372.585 135.003 372.271 136.515 372.548 137.976C372.825 139.437 373.672 140.728 374.901 141.565C376.13 142.402 377.641 142.716 379.102 142.439C380.564 142.162 381.855 141.315 382.692 140.086L396.468 119.865C396.992 119.098 397.316 118.212 397.411 117.287C397.505 116.363 397.367 115.43 397.009 114.573Z"
              fill="white"
            />
            <path
              d="M195.581 133.774L181.805 113.553C181.256 112.747 180.506 112.098 179.63 111.671C178.754 111.244 177.781 111.052 176.808 111.116C175.187 112.237 173.576 113.39 171.995 114.573C171.637 115.43 171.499 116.363 171.593 117.287C171.687 118.212 172.011 119.098 172.536 119.865L186.312 140.086C187.149 141.315 188.44 142.162 189.901 142.439C191.362 142.716 192.874 142.402 194.103 141.565C195.332 140.728 196.178 139.437 196.456 137.976C196.733 136.515 196.419 135.003 195.581 133.774Z"
              fill="white"
            />
            <path
              d="M139.384 212.905L116.706 203.697C115.328 203.137 113.784 203.148 112.414 203.726C111.044 204.305 109.96 205.404 109.4 206.782C108.84 208.159 108.851 209.703 109.429 211.073C110.007 212.443 111.106 213.528 112.484 214.088L135.163 223.296C136.54 223.854 138.083 223.843 139.452 223.264C140.821 222.685 141.905 221.586 142.464 220.209C143.024 218.832 143.014 217.289 142.436 215.92C141.859 214.55 140.761 213.466 139.384 212.905Z"
              fill="white"
            />
            <path
              d="M285.012 414.893C283.525 414.895 282.1 415.487 281.049 416.538C279.998 417.59 279.406 419.015 279.403 420.501V444.975C279.403 446.462 279.994 447.889 281.046 448.941C282.098 449.992 283.524 450.583 285.012 450.583C286.499 450.583 287.926 449.992 288.978 448.941C290.029 447.889 290.62 446.462 290.62 444.975V420.501C290.618 419.015 290.026 417.59 288.975 416.538C287.923 415.487 286.498 414.895 285.012 414.893Z"
              fill="white"
            />
            <path
              d="M396.468 412.16L382.692 391.938C382.277 391.33 381.747 390.809 381.131 390.405C380.515 390.001 379.826 389.723 379.102 389.586C378.379 389.448 377.636 389.455 376.915 389.605C376.194 389.755 375.51 390.045 374.901 390.46C374.292 390.874 373.771 391.405 373.367 392.02C372.964 392.636 372.685 393.326 372.548 394.049C372.411 394.772 372.417 395.516 372.567 396.237C372.717 396.958 373.008 397.642 373.422 398.251L387.199 418.472C387.748 419.278 388.497 419.926 389.374 420.354C390.25 420.781 391.223 420.972 392.195 420.909C393.817 419.787 395.428 418.635 397.009 417.452C397.367 416.595 397.505 415.662 397.411 414.737C397.316 413.813 396.992 412.927 396.468 412.16Z"
              fill="white"
            />
            <path
              d="M456.52 317.937L433.841 308.729C432.463 308.169 430.92 308.18 429.55 308.758C428.18 309.337 427.095 310.436 426.536 311.814C425.976 313.191 425.986 314.735 426.565 316.105C427.143 317.475 428.242 318.56 429.619 319.12L452.298 328.328C453.676 328.886 455.219 328.874 456.588 328.296C457.957 327.717 459.04 326.618 459.6 325.241C460.159 323.864 460.149 322.321 459.572 320.952C458.994 319.582 457.896 318.498 456.52 317.937Z"
              fill="white"
            />
            <path
              d="M194.103 390.46C192.874 389.623 191.362 389.309 189.902 389.586C188.441 389.863 187.15 390.71 186.312 391.938L172.536 412.16C172.012 412.927 171.688 413.813 171.593 414.737C171.499 415.662 171.637 416.595 171.995 417.452C173.576 418.635 175.187 419.787 176.808 420.909C177.781 420.972 178.754 420.781 179.63 420.353C180.506 419.926 181.256 419.277 181.805 418.472L195.582 398.251C195.996 397.642 196.287 396.958 196.437 396.237C196.587 395.516 196.593 394.772 196.456 394.049C196.319 393.325 196.04 392.636 195.636 392.02C195.233 391.404 194.712 390.874 194.103 390.46Z"
              fill="white"
            />
            <path
              d="M142.464 311.808C142.187 311.127 141.778 310.506 141.261 309.982C140.745 309.459 140.129 309.042 139.451 308.756C138.773 308.47 138.046 308.32 137.31 308.316C136.574 308.311 135.844 308.451 135.163 308.729L112.484 317.937C111.107 318.498 110.01 319.582 109.432 320.952C108.855 322.321 108.845 323.864 109.404 325.241C109.964 326.618 111.047 327.717 112.416 328.296C113.785 328.875 115.328 328.886 116.706 328.328L139.384 319.12C140.76 318.556 141.857 317.47 142.434 316.1C143.011 314.73 143.022 313.187 142.464 311.808Z"
              fill="white"
            />
            <motion.path
              variants={{
                initial: { rotateZ: 0 },
                visible: { rotateZ: [0, 90, 180, 270, 360] },
              }}
              initial="initial"
              animate="visible"
              transition={{ duration: 2, repeat: Infinity }}
              d="M292.289 263.229C292.807 266.295 292.087 269.441 290.289 271.977C288.49 274.513 285.759 276.232 282.694 276.757L183.171 293.685C181.653 293.944 180.098 293.9 178.597 293.558C177.096 293.216 175.676 292.581 174.42 291.69C173.164 290.799 172.096 289.669 171.276 288.366C170.456 287.062 169.902 285.609 169.643 284.091C169.385 282.573 169.429 281.019 169.771 279.517C170.113 278.016 170.748 276.597 171.639 275.34C172.53 274.084 173.66 273.016 174.963 272.196C176.267 271.377 177.72 270.822 179.238 270.564L278.761 253.635C281.827 253.117 284.973 253.836 287.509 255.635C290.045 257.434 291.764 260.165 292.289 263.229Z"
              fill="#3F3D56"
              style={{ originX: "288.5px" }}
            />
            <motion.path
              d="M397.035 373.493C395.605 374.931 393.663 375.743 391.636 375.751C389.608 375.759 387.66 374.962 386.219 373.536L279.083 267.241C277.646 265.811 276.834 263.87 276.827 261.843C276.82 259.816 277.618 257.869 279.046 256.43C280.473 254.991 282.414 254.177 284.441 254.168C286.468 254.159 288.416 254.956 289.856 256.382L396.992 362.678C398.43 364.107 399.242 366.049 399.25 368.077C399.258 370.104 398.461 372.052 397.035 373.493Z"
              fill="#3F3D56"
              style={{ originX: "288.5px", originY: "279px" }}
              variants={{
                initial: { rotateZ: 0 },
                visible: { rotateZ: [0, 90, 180, 270, 360] },
              }}
              initial="initial"
              animate="visible"
              transition={{ duration: 2, repeat: Infinity }}
            />
            <path
              d="M284.502 279.269C291.823 279.269 297.758 273.334 297.758 266.012C297.758 258.691 291.823 252.756 284.502 252.756C277.181 252.756 271.245 258.691 271.245 266.012C271.245 273.334 277.181 279.269 284.502 279.269Z"
              fill="#CCCCCC"
            />
            <path
              d="M193.192 36.1439C172.843 68.1354 141.796 89.3663 103.507 103.314C102.75 103.881 101.889 104.293 100.973 104.527C100.057 104.761 99.1045 104.812 98.1688 104.678C97.2331 104.543 96.3331 104.226 95.52 103.744C94.7069 103.262 93.9968 102.624 93.4301 101.867C72.6318 74.0978 77.3281 34.4093 104.777 13.19C111.414 8.06884 119.001 4.31691 127.099 2.15205C135.198 -0.0128136 143.645 -0.547484 151.952 0.579089C160.258 1.70566 168.258 4.47103 175.487 8.71465C182.716 12.9583 189.03 18.5956 194.063 25.2994L194.638 26.0675C195.205 26.8241 195.617 27.6849 195.851 28.6007C196.085 29.5166 196.136 30.4696 196.002 31.4053C195.867 32.3409 195.55 33.241 195.068 34.0541C194.586 34.8672 193.948 35.5773 193.192 36.1439Z"
              fill="#E6E6E6"
            />
            <path
              d="M374.941 25.2994C379.974 18.5956 386.288 12.9583 393.517 8.71464C400.746 4.47102 408.746 1.70567 417.052 0.579093C425.359 -0.54748 433.806 -0.0128247 441.904 2.15203C450.003 4.31689 457.59 8.06883 464.226 13.19C491.676 34.4093 496.372 74.0978 475.574 101.867C475.007 102.624 474.297 103.262 473.484 103.744C472.671 104.226 471.771 104.543 470.835 104.678C469.899 104.812 468.946 104.761 468.031 104.527C467.115 104.293 466.254 103.881 465.497 103.314C429.952 89.7052 400.803 66.1555 375.812 36.1439C374.284 34.9995 373.274 33.2949 373.002 31.4052C372.731 29.5155 373.222 27.5955 374.366 26.0674L374.941 25.2994Z"
              fill="#E6E6E6"
            />
            <path
              d="M366.022 455.956C364.726 456.684 363.772 457.896 363.368 459.327C362.964 460.758 363.143 462.29 363.867 463.589L396.235 521.43C396.962 522.728 398.174 523.684 399.605 524.088C401.036 524.492 402.57 524.311 403.867 523.585C405.165 522.858 406.122 521.646 406.526 520.215C406.93 518.784 406.75 517.251 406.024 515.953L373.655 458.111C372.927 456.815 371.715 455.86 370.284 455.456C368.854 455.052 367.321 455.232 366.022 455.956Z"
              fill="#E6E6E6"
            />
            <path
              d="M195.348 458.111L162.98 515.952C162.254 517.25 162.074 518.784 162.478 520.215C162.882 521.646 163.839 522.858 165.136 523.584C166.434 524.311 167.967 524.492 169.399 524.088C170.83 523.684 172.042 522.728 172.769 521.43L205.137 463.588C205.497 462.946 205.727 462.238 205.813 461.507C205.9 460.775 205.841 460.034 205.641 459.325C205.441 458.616 205.103 457.954 204.647 457.375C204.191 456.797 203.625 456.314 202.982 455.954C202.339 455.594 201.632 455.365 200.9 455.279C200.169 455.192 199.427 455.251 198.719 455.451C198.01 455.652 197.347 455.989 196.769 456.446C196.191 456.902 195.708 457.468 195.348 458.111Z"
              fill="#E6E6E6"
            />
            <path
              d="M402.79 536.24C412.365 536.24 420.126 528.479 420.126 518.905C420.126 509.331 412.365 501.57 402.79 501.57C393.216 501.57 385.455 509.331 385.455 518.905C385.455 528.479 393.216 536.24 402.79 536.24Z"
              fill="#E6E6E6"
            />
            <path
              d="M415.027 92.6586C424.601 92.6586 432.363 84.8972 432.363 75.3232C432.363 65.7491 424.601 57.9878 415.027 57.9878C405.453 57.9878 397.692 65.7491 397.692 75.3232C397.692 84.8972 405.453 92.6586 415.027 92.6586Z"
              fill="#E6E6E6"
            />
            <path
              d="M283.482 51.8694C293.056 51.8694 300.818 44.1081 300.818 34.534C300.818 24.9599 293.056 17.1986 283.482 17.1986C273.908 17.1986 266.147 24.9599 266.147 34.534C266.147 44.1081 273.908 51.8694 283.482 51.8694Z"
              fill="#E6E6E6"
            />
            <path
              d="M158.056 90.619C167.63 90.619 175.391 82.8577 175.391 73.2836C175.391 63.7096 167.63 55.9482 158.056 55.9482C148.482 55.9482 140.72 63.7096 140.72 73.2836C140.72 82.8577 148.482 90.619 158.056 90.619Z"
              fill="#E6E6E6"
            />
            <path
              d="M169.273 536.24C178.847 536.24 186.608 528.479 186.608 518.905C186.608 509.331 178.847 501.57 169.273 501.57C159.699 501.57 151.937 509.331 151.937 518.905C151.937 528.479 159.699 536.24 169.273 536.24Z"
              fill="#E6E6E6"
            />
            <path
              d="M467.753 605.046L468.498 606.931H467.753V605.046Z"
              fill="#2F2E41"
            />
          </svg>
        </div>
        <div className="time-svg w-screen h-full flex justify-center items-center relative overflow-hidden bottom-90">
          <motion.svg
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial={"initial"}
            animate={timeControls}
            onHoverStart={() => {
              timeControls.start("visible");
              settextCursor("Time!");
            }}
            onHoverEnd={() => {
              timeControls.start("initial");
              settextCursor("");
            }}
            transition={{ duration: 1, ease: easeInOut }}
            width="1857"
            height="187"
            viewBox="0 0 1857 187"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11/12 overflow-hidden "
          >
            <motion.path
              d="M1812.98 186.562C1802.56 186.562 1794.26 184.609 1788.08 180.703C1781.89 176.797 1777.47 171.165 1774.8 163.809C1772.13 156.452 1770.79 147.598 1770.79 137.246V78.3594C1770.79 64.7526 1774.7 54.4661 1782.51 47.5C1790.32 40.4688 1801.07 36.9531 1814.74 36.9531C1842.86 36.9531 1856.93 50.7552 1856.93 78.3594V89.0039C1856.93 101.895 1856.8 110.553 1856.54 114.98H1805.75V143.301C1805.75 145.905 1805.92 148.477 1806.24 151.016C1806.57 153.49 1807.28 155.54 1808.39 157.168C1809.56 158.796 1811.42 159.609 1813.96 159.609C1817.6 159.609 1819.88 158.047 1820.79 154.922C1821.7 151.732 1822.16 147.598 1822.16 142.52V128.457H1856.93V136.758C1856.93 147.695 1855.56 156.875 1852.82 164.297C1850.15 171.654 1845.6 177.22 1839.15 180.996C1832.77 184.707 1824.05 186.562 1812.98 186.562ZM1805.56 97.5977H1822.16V77.8711C1822.16 72.5977 1821.51 68.8216 1820.21 66.543C1818.9 64.1992 1816.95 63.0273 1814.35 63.0273C1811.55 63.0273 1809.37 64.1341 1807.8 66.3477C1806.31 68.5612 1805.56 72.4023 1805.56 77.8711V97.5977Z"
              fill="#3B82F6"
              onHoverStart={() => {
                settextCursor("Drag");
              }}
              onHoverEnd={() => {
                settextCursor("");
              }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 0,
                bottom: 50,
              }}
            />
            <motion.path
              d="M1118.21 185V38.5156H1152.39V55.5078C1153.95 49.5182 1156.62 44.9284 1160.39 41.7383C1164.17 38.5482 1169.7 36.9531 1177 36.9531C1182.86 36.9531 1187.84 38.3203 1191.94 41.0547C1196.1 43.724 1199.03 47.2721 1200.73 51.6992C1203.4 46.8815 1206.52 43.2357 1210.1 40.7617C1213.75 38.2227 1218.92 36.9531 1225.63 36.9531C1233.77 36.9531 1240.02 38.7109 1244.38 42.2266C1248.81 45.6771 1251.87 50.4948 1253.56 56.6797C1255.32 62.7995 1256.2 69.8958 1256.2 77.9688V185H1221.33V77.3828C1221.33 67.9427 1218.92 63.2227 1214.11 63.2227C1211.57 63.2227 1209.61 64.1016 1208.25 65.8594C1206.88 67.5521 1205.93 69.668 1205.41 72.207C1204.89 74.7461 1204.63 77.2852 1204.63 79.8242V185H1169.77V77.3828C1169.77 74.3229 1169.38 71.263 1168.6 68.2031C1167.88 65.1432 1165.99 63.6133 1162.93 63.6133C1160.33 63.6133 1158.31 64.5573 1156.88 66.4453C1155.45 68.3333 1154.47 70.6771 1153.95 73.4766C1153.43 76.2109 1153.17 78.9128 1153.17 81.582V185H1118.21Z"
              fill="#3B82F6"
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              onHoverStart={() => {
                settextCursor("Drag");
              }}
              onHoverEnd={() => {
                settextCursor("");
              }}
            />
            <motion.path
              d="M567.379 29.5312V0.429688H602.34V29.5312H567.379ZM567.379 185V38.5156H602.34V185H567.379Z"
              fill="#3B82F6"
              onHoverStart={() => {
                settextCursor("Drag");
              }}
              onHoverEnd={() => {
                settextCursor("");
              }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
            />
            <motion.path
              d="M34.5195 186.562C25.0794 186.562 18.6992 184.577 15.3789 180.605C12.1237 176.569 10.4961 170.417 10.4961 162.148V70.8398H0.632812V44.1797H10.4961V13.125H44.4805V44.1797H54.3438V70.8398H44.4805V153.945C44.4805 156.354 44.8711 158.047 45.6523 159.023C46.4336 160 47.931 160.488 50.1445 160.488C51.707 160.488 53.1068 160.358 54.3438 160.098V183.926C53.5625 184.186 51.1211 184.674 47.0195 185.391C42.918 186.172 38.7513 186.562 34.5195 186.562Z"
              fill="#3B82F6"
              onHoverStart={() => {
                settextCursor("Drag");
              }}
              onHoverEnd={() => {
                settextCursor("");
              }}
              drag
              dragConstraints={{
                top: -50,
                left: 0,
                right: 50,
                bottom: 50,
              }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default Notime;
