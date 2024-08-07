import { Link } from "react-router-dom";

const Four04 = () => {
  return (
    <section className="w-screen h-screen bg-blue cursor-default flex justify-center items-center">
      <div className="text  text-Dark font-Display flex justify-center items-center flex-wrap">
        <h5 className="text-5xl w-screen flex justify-center items-center">
          404
        </h5>
        <h6 className="text-center text-4xl">
          This page is either <br />
          non-existent or is bieng maintained.
          <br />
          Please Contact me and explain the issue.
        </h6>
        <div className="butt w-screen flex justify-around h-20">
          <button className="w-20 bg-blueShades text-white h-full mt-10 rounded-100">
            <Link to="/Contact">Contact</Link>
          </button>
          <button className="w-20  bg-blueShades text-white h-full mt-10 rounded-100">
            <Link to="/">Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Four04;
