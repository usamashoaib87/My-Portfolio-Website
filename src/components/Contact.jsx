import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "name",
          from_email: form.email,
          to_email: "usamashoaib87@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl overflow-y-auto max-h-[860px]'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-5 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <div className="mt-5 pt-8 border-t border-gray-700">
          <h4 className="text-white font-bold text-xl mb-6">Contact Information</h4>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-secondary font-medium min-w-[100px]">Name:</span>
              <span className="text-white">M Usama Shafqat</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-secondary font-medium min-w-[100px]">Email:</span>
              <a href="mailto:usamashoaib87@gmail.com" className="text-white hover:text-gray-300">
                usamashoaib87@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-secondary font-medium min-w-[100px]">Phone:</span>
              <a href="tel:+923176648100" className="text-white hover:text-gray-300">
                +92 317 6648100
              </a>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-secondary font-medium min-w-[100px]">Address:</span>
              <span className="text-white">Valencia Town, Lahore</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
