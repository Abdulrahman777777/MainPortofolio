import React from "react";
import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FooterCont from "../components/footerCont";

function Contact() {
  const [state, handleSubmit] = useForm("xvoegjjb");
  useEffect(() => window.scroll(0, 0));
  if (state.succeeded) {
    return (
      <section className="w-screen h-screen bg-blueShades flex justify-center items-center flex-wrap">
        <h1 className="text-xl text-white font-Display">Thanks for joining</h1>
        <button className="w-full mt-10 bg-white border-blue border-4 rounded-20 text-blueShade font-Display ">
          <Link to={"/"} className="cursor-pointer">
            {" "}
            Back to Home?
          </Link>
        </button>
      </section>
    );
  }
  return (
    <>
      <section className="w-screen h-screen cursor-default bg-Dark flex flex-wrap justify-center items-center">
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 2, delay: 0.2, ease: "circOut" }}
          className="push-out w-screen h-screen bg-white origin-bottom-right fixed z-50"
        ></motion.div>
        <form onSubmit={handleSubmit} className="h-40 w-45 flex flex-wrap">
          <motion.label
            initial={{ x: -200 }}
            animate={{ x: [-200, 0, 20, 0] }}
            transition={{ duration: 0.6, delay: 1, ease: "circIn" }}
            htmlFor="email"
            className="w-full text-white font-Display relative -left-30 -top-10 text-3xl"
          >
            Email Address:
          </motion.label>
          <motion.input
            id="email"
            type="email"
            className="email w-full bg-white text-blueShades border-blue border-4 font-Display rounded-100"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />{" "}
          <motion.label
            initial={{ x: -400 }}
            animate={{ x: [-400, 0, 20, 0] }}
            transition={{ duration: 0.6, delay: 1.6, ease: "circIn" }}
            htmlFor="email"
            className="w-full text-white font-Display relative -left-30 text-3xl"
          >
            Message:
          </motion.label>
          <textarea
            id="message"
            name="message"
            className="w-full pt-8 mt-10
          email resize-none bg-white text-blueShades border-blue border-4 rounded-20 text-2xl font-Display"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            className="w-full mt-10 bg-white border-blue border-4 rounded-20 text-blueShade font-Display "
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </section>
      <FooterCont className="-top-90 relative" />
    </>
  );
}
export default Contact;
