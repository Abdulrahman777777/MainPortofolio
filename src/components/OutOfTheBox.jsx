import { easeInOut, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const OutOfTheBox = ({ settextCursor }) => {
  const path = useRef(null);
  const box = useRef(null);
  const inView = useInView(path, { once: false });
  const inViewBox = useInView(box, { once: false });
  const outofControls = useAnimation();
  const outofControls1 = useAnimation();
  const outofControls2 = useAnimation();
  const outofControls3 = useAnimation();
  const outofControls4 = useAnimation();
  const outControls = useAnimation();
  const outControls1 = useAnimation();
  const outControls2 = useAnimation();
  const overlayControls = useAnimation();
  const squaredControls = useAnimation();
  const squaredControls1 = useAnimation();
  const squaredControls2 = useAnimation();
  useEffect(() => {
    if (inView) {
      outofControls.start("visible");
      outofControls1.start("visible");
      outofControls2.start("visible");
      outofControls3.start("visible");
      outofControls4.start("visible");
      outControls.start("visible");
      outControls1.start("visible");
      outControls2.start("visible");
    }
  }, [inView]);
  useEffect(() => {
    if (inViewBox) {
      overlayControls.start("visible");
      squaredControls.start("visible");
      squaredControls1.start("visible");
      squaredControls2.start("visible");
    }
  }, [inViewBox]);
  return (
    <div className="outofthebox w-screen h-screen overflow-hidden flex flex-col cursor-none">
      <div className="text flex flex-wrap items-center justify-center h-screen other:h-half cursor-none">
        <motion.svg
          width="916"
          height="362"
          viewBox="0 0 916 362"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/3 h-seventy bottom-10 relative p-0 m-0 min-w-72"
        >
          <motion.path
            ath
            d="M825.289 353V355.5H827.789H897.125H899.625V353V129.523H910.992H913.492V127.023V72.9219V70.4219H910.992H898.258V69.2109C898.258 64.7925 898.703 61.3638 899.507 58.8361L899.512 58.8211L899.517 58.806C899.809 57.8452 900.294 57.2499 900.959 56.8477C901.68 56.4111 902.812 56.0859 904.547 56.0859C905.296 56.0859 907.194 56.3524 910.502 57.014L913.492 57.612V54.5625V11.3984V9.7281L911.949 9.0888C902.418 5.14023 890.077 3.23438 875.055 3.23438C858.914 3.23438 846.35 7.27121 837.838 15.783C829.326 24.2948 825.289 36.8594 825.289 53V70.4219H815.094H812.594V72.9219V126.242V128.742H815.094H825.289V353Z"
            stroke="white"
            strokeWidth="5"
            ref={path}
            variants={{
              hidden: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#ffffff" },
              hoverEnd: {
                pathLength: 1,
                fill: "#ffffff",
                transition: { duration: 1 },
              },
            }}
            initial={"hidden"}
            animate={outofControls}
            transition={{ duration: 2, delay: 2.5 }}
            onHoverStart={() => {
              settextCursor("disappear!");
              outofControls.start("hover");
            }}
            onHoverEnd={() => {
              settextCursor("");
              outofControls.start("hoverEnd");
            }}
          />
          <motion.path
            ath
            d="M718.034 294.673L718.028 294.683L718.022 294.692C716.099 297.931 712.865 299.719 707.672 299.719C702.501 299.719 699.176 297.943 697.12 294.681C694.937 290.87 693.766 285.942 693.766 279.758V136.594C693.766 128.252 695.117 122.425 697.472 118.754C699.704 115.272 702.974 113.508 707.672 113.508C712.37 113.508 715.639 115.272 717.872 118.754C720.226 122.425 721.578 128.252 721.578 136.594V279.758C721.578 285.944 720.341 290.866 718.034 294.673ZM617.672 265.305C617.672 295.941 625.05 319.381 640.247 335.154C655.46 350.945 678.096 358.625 707.672 358.625C737.312 358.625 759.995 350.946 775.242 335.156C790.472 319.383 797.867 295.942 797.867 265.305V147.727C797.867 119.636 789.97 96.967 773.946 79.9983C757.881 62.8547 735.677 54.4062 707.672 54.4062C679.793 54.4062 657.656 62.8571 641.593 79.998C625.569 96.9668 617.672 119.636 617.672 147.727V265.305Z"
            stroke="white"
            strokeWidth="5"
            variants={{
              hidden: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#ffffff" },
              hoverEnd: {
                pathLength: 1,
                fill: "#ffffff",
                transition: { duration: 1 },
              },
            }}
            initial={"hidden"}
            animate={outofControls1}
            transition={{ duration: 2, delay: 2.5 }}
            onHoverStart={() => {
              settextCursor("disappear!");
              outofControls1.start("hover");
            }}
            onHoverEnd={() => {
              settextCursor("");
              outofControls1.start("hoverEnd");
            }}
          />
          <motion.path
            ath
            d="M426.429 345.78L426.443 345.798L426.457 345.814C433.845 354.651 447.605 358.625 466.656 358.625C475.268 358.625 483.752 357.831 492.105 356.241C500.2 354.827 505.311 353.818 507.095 353.223L508.805 352.653V350.852V303.195V300.114L505.79 300.749C503.519 301.227 500.897 301.477 497.906 301.477C493.681 301.477 491.699 300.516 490.874 299.485C489.871 298.232 489.078 295.592 489.078 290.891V127.18H506.305H508.805V124.68V71.3594V68.8594H506.305H489.078V9.25V6.75H486.578H418.609H416.109V9.25V68.8594H398.883H396.383V71.3594V124.68V127.18H398.883H416.109V307.297C416.109 324.087 419.402 337.066 426.429 345.78Z"
            stroke="white"
            strokeWidth="5"
            variants={{
              hidden: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#ffffff" },
              hoverEnd: {
                pathLength: 1,
                fill: "#ffffff",
                transition: { duration: 1 },
              },
            }}
            initial={"hidden"}
            animate={outofControls2}
            transition={{ duration: 2, delay: 2.5 }}
            onHoverStart={() => {
              settextCursor("disappear!");
              outofControls2.start("hover");
            }}
            onHoverEnd={() => {
              settextCursor("");
              outofControls2.start("hoverEnd");
            }}
          />
          <motion.path
            ath
            d="M225.844 348.318L225.852 348.324L225.859 348.329C234.798 355.313 247.409 358.625 263.336 358.625C276.901 358.625 287.366 355.645 294.155 349.152C298.566 345.015 302.49 339.677 305.953 333.188V353V355.5H308.453H378.375H380.875V353V60.0312V57.5312H378.375H308.648H306.148V60.0312V266.477C306.148 276.631 305.181 284.763 303.324 290.954L303.318 290.976L303.311 290.998C302.521 293.822 301.205 295.73 299.48 296.962C297.738 298.207 295.328 298.938 292.047 298.938C288.918 298.938 286.592 298.408 284.917 297.52C283.3 296.662 282.176 295.413 281.482 293.684C279.847 289.471 278.922 281.694 278.922 269.992V60.0312V57.5312H276.422H206.109H203.609V60.0312V278.195C203.609 293.972 205.12 307.86 208.179 319.83L208.181 319.836C211.292 331.873 217.156 341.422 225.844 348.318Z"
            stroke="white"
            strokeWidth="5"
            variants={{
              hidden: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#ffffff" },
              hoverEnd: {
                pathLength: 1,
                fill: "#ffffff",
                transition: { duration: 1 },
              },
            }}
            initial={"hidden"}
            animate={outofControls3}
            transition={{ duration: 2, delay: 2.5 }}
            onHoverStart={() => {
              settextCursor("disappear!");
              outofControls3.start("hover");
            }}
            onHoverEnd={() => {
              settextCursor("");
              outofControls3.start("hoverEnd");
            }}
          />
          <motion.path
            ath
            d="M103.581 294.673L103.575 294.683L103.569 294.692C101.646 297.931 98.412 299.719 93.2188 299.719C88.0478 299.719 84.7224 297.943 82.667 294.681C80.4843 290.87 79.3125 285.942 79.3125 279.758V136.594C79.3125 128.252 80.6643 122.425 83.0186 118.754C85.2512 115.272 88.5207 113.508 93.2188 113.508C97.9168 113.508 101.186 115.272 103.419 118.754C105.773 122.425 107.125 128.252 107.125 136.594V279.758C107.125 285.944 105.888 290.866 103.581 294.673ZM3.21875 265.305C3.21875 295.941 10.5965 319.381 25.7934 335.154C41.007 350.945 63.6425 358.625 93.2188 358.625C122.859 358.625 145.542 350.946 160.789 335.156C176.019 319.383 183.414 295.942 183.414 265.305V147.727C183.414 119.636 175.517 96.967 159.493 79.9983C143.428 62.8547 121.224 54.4062 93.2188 54.4062C65.3399 54.4062 43.2031 62.8571 27.14 79.998C11.1159 96.9668 3.21875 119.636 3.21875 147.727V265.305Z"
            stroke="white"
            strokeWidth="5"
            variants={{
              hidden: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#ffffff" },
              hoverEnd: {
                pathLength: 1,
                fill: "#ffffff",
                transition: { duration: 1 },
              },
            }}
            initial={"hidden"}
            animate={outofControls4}
            transition={{ duration: 2, delay: 2.5 }}
            onHoverStart={() => {
              settextCursor("disappear!");
              outofControls4.start("hover");
            }}
            onHoverEnd={() => {
              settextCursor("");
              outofControls4.start("hoverEnd");
            }}
          />
        </motion.svg>
        <motion.svg
          className="w-1/3 h-sixty bottom-10 relative p-0 m-0 min-w-64"
          width="513"
          height="358"
          viewBox="0 0 513 358"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onHoverStart={() => {
            settextCursor("disappear!");
            outControls.start("hover");
            outControls1.start("hover");
            outControls2.start("hover");
          }}
          onHoverEnd={() => {
            outControls.start("hoverEnd");
            outControls1.start("hoverEnd");
            outControls2.start("hoverEnd");
          }}
        >
          <motion.path
            ath
            d="M506.812 211.461H509.17L509.308 209.108C509.834 200.169 510.094 182.779 510.094 157.008V135.719C510.094 107.717 502.958 86.2596 488.251 71.8252C473.553 57.3992 451.717 50.4062 423.219 50.4062C395.45 50.4062 373.305 57.553 357.098 72.1379C340.795 86.677 332.828 108.022 332.828 135.719V253.492C332.828 274.398 335.522 292.411 340.986 307.47C346.499 322.666 355.691 334.39 368.563 342.52C381.468 350.67 398.588 354.625 419.703 354.625C442.076 354.625 460.017 350.881 473.304 343.153L473.311 343.149C486.729 335.288 496.212 323.682 501.739 308.45C507.339 293.247 510.094 274.577 510.094 252.516V235.914V233.414H507.594H438.062H435.562V235.914V264.039C435.562 274.068 434.66 282.079 432.926 288.15C432.146 290.821 430.849 292.634 429.129 293.813C427.381 295.012 424.957 295.719 421.656 295.719C417.161 295.719 414.323 294.316 412.571 291.902C410.639 289.049 409.317 285.353 408.706 280.709C408.069 275.74 407.75 270.704 407.75 265.602V211.461H506.812ZM431.971 113.3L431.978 113.313L431.986 113.326C434.248 117.285 435.562 124.273 435.562 134.742V171.695H407.359V134.742C407.359 123.896 408.871 116.884 411.409 113.116C414.046 109.393 417.628 107.555 422.438 107.555C424.655 107.555 426.476 108.049 427.987 108.956C429.502 109.865 430.844 111.271 431.971 113.3Z"
            stroke="#3B82F6"
            strokeWidth="5"
            variants={{
              initial: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#3B82F6" },
              hoverEnd: {
                pathLength: 1,
                fill: "#3B82F6",
                transition: { duration: 1 },
              },
            }}
            initial={"initial"}
            animate={outControls}
            transition={{ duration: 2, delay: 3 }}
          />
          <motion.path
            ath
            d="M132.828 349V351.5H135.328H207.203H209.703V349V127.32C209.703 122.015 210.961 117.567 213.38 113.871C215.803 110.358 218.889 108.727 222.828 108.727C227.898 108.727 231.178 110.46 233.227 113.637L233.243 113.66L233.258 113.683C235.638 117.196 236.93 121.873 236.93 127.906V349V351.5H239.43H310.133H312.633V349V123.414C312.633 101.591 307.939 83.8976 298.29 70.5801C288.443 56.9881 272.788 50.4062 251.93 50.4062C241.068 50.4062 231.454 53.1963 223.187 58.8419C217.731 62.4819 213.247 67.398 209.703 73.5232V5.25V2.75H207.203H135.328H132.828V5.25V349Z"
            stroke="#3B82F6"
            variants={{
              initial: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#3B82F6" },
              hoverEnd: {
                pathLength: 1,
                fill: "#3B82F6",
                transition: { duration: 1 },
              },
            }}
            initial={"initial"}
            animate={outControls1}
            transition={{ duration: 2, delay: 3 }}
          />
          <motion.path
            ath
            d="M32.9915 341.78L33.0053 341.798L33.0195 341.814C40.4077 350.651 54.1672 354.625 73.2188 354.625C81.8306 354.625 90.3142 353.831 98.6675 352.241C106.763 350.827 111.874 349.818 113.658 349.223L115.367 348.653V346.852V299.195V296.114L112.352 296.749C110.082 297.227 107.459 297.477 104.469 297.477C100.244 297.477 98.261 296.516 97.4365 295.485C96.4338 294.232 95.6406 291.592 95.6406 286.891V123.18H112.867H115.367V120.68V67.3594V64.8594H112.867H95.6406V5.25V2.75H93.1406H25.1719H22.6719V5.25V64.8594H5.44531H2.94531V67.3594V120.68V123.18H5.44531H22.6719V303.297C22.6719 320.087 25.9641 333.066 32.9915 341.78Z"
            stroke="#3B82F6"
            strokeWidth="5"
            variants={{
              initial: { pathLength: 0, fill: "#0D2043" },
              hover: {
                pathLength: 0,
                fill: "#0D2043",
                transition: { duration: 1 },
              },
              visible: { pathLength: 1, fill: "#3B82F6" },
              hoverEnd: {
                pathLength: 1,
                fill: "#3B82F6",
                transition: { duration: 1 },
              },
            }}
            initial={"initial"}
            animate={outControls2}
            transition={{ duration: 2, delay: 3 }}
          />
        </motion.svg>
      </div>
      <div className="box-svg h-half w-full flex justify-center ">
        <svg
          width="1920"
          height="562"
          viewBox="0 0 1920 562"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full min-w-60"
        >
          <g id="undraw_gift_box_re_vau4 1" clip-path="url(#clip0_67_2)">
            <motion.path
              ath
              onClick={() => {
                squaredControls.start("move");
              }}
              onHoverStart={() => settextCursor("Click!")}
              onHoverEnd={() => settextCursor("")}
              id="filled-square"
              d="M985.663 229.847L929 261.695L961.715 316.857L1018.38 285.009L985.663 229.847Z"
              fill="#FF6584"
              variants={{
                initial: { y: 0, x: 0, rotate: 0 },
                visible: { x: -200, y: -230, rotate: 90 },
                move: {
                  x: [-200, -218, -200],
                  y: [-230, -220, -230],
                  rotate: [270, 90],
                  transition: { duration: 0.5, ease: easeInOut },
                },
              }}
              initial={"initial"}
              animate={squaredControls}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.path
              ath
              id="un-filled-square"
              d="M991.523 329.329L955.652 268.846L1017.78 233.926L1053.65 294.41L991.523 329.329ZM959.798 269.928L992.634 325.292L1049.51 293.328L1016.67 237.963L959.798 269.928Z"
              fill="#3B82F6"
              variants={{
                initial: { y: 0, x: 0, rotate: 0 },
                visible: { x: -200, y: -230, rotate: 90 },
                move: {
                  x: [-218, -200],
                  y: [-220, -230],
                  rotate: [360, 90],
                  transition: { duration: 0.5, ease: easeInOut },
                },
              }}
              initial={"initial"}
              animate={squaredControls}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.path
              ath
              onClick={() => {
                squaredControls1.start("move");
              }}
              onHoverStart={() => settextCursor("Click!")}
              onHoverEnd={() => settextCursor("")}
              id="filled-circle"
              d="M942.632 405.752C957.544 405.752 969.632 393.984 969.632 379.467C969.632 364.951 957.544 353.183 942.632 353.183C927.721 353.183 915.632 364.951 915.632 379.467C915.632 393.984 927.721 405.752 942.632 405.752Z"
              fill="#D0CDE1"
              variants={{
                initial: { y: 0, x: 0, rotate: 0 },
                visible: { x: -90, y: -250, rotate: 90 },
                move: {
                  x: [-90, -80, -90],
                  y: [-250, -230, -250],
                  transition: { duration: 0.5, ease: easeInOut },
                },
              }}
              initial={"initial"}
              animate={squaredControls1}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.path
              ath
              id="un-filled-circle"
              d="M965.694 407.058C960.057 407.058 954.547 405.431 949.86 402.382C945.174 399.334 941.521 395 939.364 389.931C937.207 384.861 936.642 379.282 937.742 373.901C938.842 368.519 941.556 363.575 945.542 359.695C949.527 355.815 954.606 353.172 960.134 352.102C965.663 351.031 971.393 351.581 976.601 353.68C981.808 355.78 986.259 359.337 989.391 363.899C992.523 368.462 994.194 373.826 994.194 379.313C994.194 386.672 991.191 393.729 985.847 398.932C980.502 404.135 973.253 407.058 965.694 407.058ZM965.694 354.343C960.621 354.343 955.662 355.808 951.444 358.551C947.226 361.295 943.938 365.195 941.997 369.758C940.055 374.32 939.547 379.341 940.537 384.185C941.527 389.028 943.97 393.478 947.557 396.97C951.144 400.462 955.715 402.84 960.69 403.804C965.666 404.767 970.823 404.273 975.51 402.383C980.197 400.493 984.203 397.292 987.021 393.186C989.84 389.08 991.344 384.252 991.344 379.313C991.344 372.691 988.642 366.339 983.831 361.657C979.021 356.974 972.497 354.343 965.694 354.343Z"
              fill="#3B82F6"
              variants={{
                initial: { y: 0, x: 0, rotate: 0 },
                visible: { x: -90, y: -250, rotate: 90 },
                move: {
                  x: [-90, -80, -90],
                  y: [-250, -230, -250],
                  transition: { duration: 0.5, ease: easeInOut },
                },
              }}
              initial={"initial"}
              animate={squaredControls1}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.path
              ath
              onHoverStart={() => settextCursor("Click!")}
              onHoverEnd={() => settextCursor("")}
              onClick={() => squaredControls2.start("move")}
              id="filled-square2"
              d="M865.958 226.305L848.974 288.011L912.359 304.545L929.343 242.839L865.958 226.305Z"
              fill="#D0CDE1"
              variants={{
                initial: { y: 0, x: 0, rotate: 0 },
                visible: { x: -200, y: -150, rotate: 90 },
                move: {
                  x: [-200, -180, -200],
                  y: [-150, -130, -150],
                  rotate: [270, 90],
                  transition: { duration: 0.5, easings: easeInOut },
                },
              }}
              initial={"initial"}
              animate={squaredControls2}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.path
              ath
              id="un-filled-square2"
              d="M883.615 308.696L815 290.798L833.385 224L902 241.898L883.615 308.696ZM818.68 288.729L881.49 305.113L898.32 243.967L835.51 227.583L818.68 288.729Z"
              fill="#3B82F6"
              variants={{
                initial: { y: 0, x: 0, rotate: 0 },
                visible: { x: -200, y: -150, rotate: 90 },
                move: {
                  x: [-200, -180, -200],
                  y: [-150, -130, -150],
                  rotate: [360, 90],
                  transition: { duration: 0.5, easings: easeInOut },
                },
              }}
              initial={"initial"}
              animate={squaredControls2}
              transition={{ duration: 0.5, delay: 1.2, ease: easeInOut }}
            />
            <motion.g
              id="body"
              onHoverStart={() => {
                settextCursor("box");
              }}
              onHoverEnd={() => {
                settextCursor("");
              }}
            >
              <motion.path
                ath
                id="Vector"
                d="M1081.97 509.096H785.369C781.737 509.092 778.254 507.686 775.686 505.185C773.117 502.685 771.672 499.294 771.668 495.758V227.421C771.672 223.884 773.117 220.494 775.686 217.993C778.254 215.493 781.737 214.086 785.369 214.082H1081.97C1085.6 214.086 1089.08 215.493 1091.65 217.993C1094.22 220.494 1095.66 223.884 1095.67 227.421V495.758C1095.66 499.294 1094.22 502.685 1091.65 505.185C1089.08 507.686 1085.6 509.092 1081.97 509.096Z"
                fill="#3B82F6"
              />
              <motion.path
                ath
                id="Vector_2"
                d="M952.439 485.324H914.951C911.702 485.32 908.587 484.062 906.289 481.825C903.992 479.589 902.699 476.556 902.695 473.393V217.81C902.699 214.647 903.992 211.615 906.289 209.378C908.587 207.141 911.702 205.883 914.951 205.879H952.439C955.689 205.883 958.804 207.141 961.102 209.378C963.399 211.615 964.692 214.647 964.695 217.81V473.393C964.692 476.556 963.399 479.589 961.102 481.825C958.804 484.062 955.689 485.32 952.439 485.324Z"
                fill="#3F3D56"
              />
            </motion.g>
            <motion.path
              ath
              id="shadow"
              opacity="0.1"
              d="M1094.52 244.893V340.81L996.524 214.889H1071.17L1094.52 244.893Z"
              fill="black"
            />
            <motion.g
              id="overlay"
              ref={box}
              variants={{
                initial: { rotate: 0, x: 0 },
                visible: { rotate: 52.22, x: 150 },
              }}
              initial={"initial"}
              animate={overlayControls}
              transition={{ duration: 3 }}
            >
              <motion.path
                ath
                id="Vector_3"
                d="M918.688 108.017C937.501 124.583 930.692 163.229 930.692 163.229C930.692 163.229 893.382 175.016 874.57 158.45C855.757 141.884 862.566 103.238 862.566 103.238C862.566 103.238 899.876 91.4511 918.688 108.017Z"
                fill="#3F3D56"
              />
              <motion.path
                ath
                id="Vector_4"
                d="M992.429 157.235C975.008 177.272 935.564 171.362 935.564 171.362C935.564 171.362 924.365 132.965 941.786 112.927C959.207 92.8904 998.652 98.801 998.652 98.801C998.652 98.801 1009.85 137.198 992.429 157.235Z"
                fill="#3F3D56"
              />
              <motion.path
                ath
                id="Vector_5"
                d="M1120.94 233.361C1119.65 235.028 1118.01 236.382 1116.13 237.315C1114.26 238.248 1112.2 238.736 1110.13 238.74L757.123 239.41C755.364 239.413 753.631 239.067 752.022 238.393C750.413 237.718 748.96 236.727 747.746 235.477C746.532 234.227 745.581 232.742 744.947 231.106C744.313 229.471 744.009 227.718 744.051 225.946L745.002 186.271C745.044 184.5 745.433 182.745 746.145 181.107C746.857 179.469 747.88 177.981 749.154 176.726C750.428 175.471 751.928 174.475 753.57 173.794C755.211 173.113 756.962 172.761 758.721 172.758L1111.73 172.087C1113.49 172.084 1115.22 172.43 1116.83 173.104C1118.44 173.779 1119.89 174.77 1121.1 176.02C1122.32 177.27 1123.27 178.756 1123.9 180.391C1124.54 182.026 1124.84 183.78 1124.8 185.551L1123.85 225.226C1123.78 228.162 1122.76 231.019 1120.94 233.361Z"
                fill="#3B82F6"
              />
              <motion.path
                ath
                id="Vector_6"
                d="M904.826 182.765L902.638 243.725L963.193 244.333L965.381 183.372L904.826 182.765Z"
                fill="#3F3D56"
              />
            </motion.g>
          </g>
          <defs>
            <clipPath id="clip0_67_2">
              <rect width="1920" height="562" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default OutOfTheBox;
