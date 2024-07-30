import Answers from "../components/Ideas/Answers";
import ItBegs from "../components/Ideas/ItBegs";
import Notime from "../components/Ideas/Notime";
import SomePretty from "../components/Ideas/SomePretty";

const Ideas = ({ settextCursor, cursorControls }) => {
  return (
    <div className="">
      <Notime settextCursor={settextCursor} />
      <SomePretty
        settextCursor={settextCursor}
        cursorControls={cursorControls}
      />
      <ItBegs />
      <Answers cursorControls={cursorControls} settextCursor={settextCursor} />
    </div>
  );
};

export default Ideas;
