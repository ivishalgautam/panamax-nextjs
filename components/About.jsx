"use client";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import aboutBanner from "../public/assets/about-banner.png";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  const ref = useRef();

  return (
    <>
      <section className="bg-white w-full grid grid-cols-1 lg:grid-cols-12 gap-5 p-4 mt-4 md:p-10 relative after:absolute after:top-0 after:right-0 after:bg-primary after:w-1/6 after:h-full after:-z-10 z-0 after:hidden after:lg:block">
        {/* content */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="px-2 md:px-8 lg:px-10 col-span-12 md:col-span-7"
        >
          <h1 className="text-2xl font-bold ">
            <span className="inline-block text-primary italic drop-shadow-lg">
              Panamax -&nbsp;
            </span>
            Your Trusted Tape Manufacturing Partner in Delhi, India
          </h1>
          <div className="my-6 text-sm">
            <p className="mt-4">
              At Panamax, we take pride in being Delhi's leading tape
              manufacturer, offering a wide range of adhesive, mask, and
              self-adhesive tapes. We Provide OEM Solutions. With our focus on
              precision and innovation, we guarantee top-quality products that
              meet your needs. Our commitment to customer satisfaction sets us
              apart, making us the preferred choice for clients all over India.
              Trust Panamax for excellence in tapes and exceptional service.
            </p>
          </div>
          <Link href="/about" className="btn-primary">
            Read more
          </Link>
        </motion.div>

        {/* image section */}
        <motion.div
          initial="hidden"
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          ref={ref}
          className="flex-box-center col-span-12 md:col-span-5 w-full"
        >
          <figure>
            <Image
              src={aboutBanner}
              alt=""
              className="sm:w-full lg:w-[85%] rounded-xl"
            />
          </figure>
        </motion.div>
      </section>
    </>
  );
};

export default About;
