import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper";

import banner1 from "../public/assets/Banner-1.jpg";
import banner2 from "../public/assets/Banner-2.jpg";
import banner3 from "../public/assets/Banner-3.jpg";
import banner4 from "../public/assets/Banner-4.jpg";
import Image from "next/image";
import EnquiryForm from "./forms/enquiry";

const Hero = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-9 my-4 px-4 gap-4">
      <motion.div
        initial={{ x: -1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-1 lg:col-span-6 flex items-center justify-center"
      >
        <Swiper
          modules={[Pagination]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <Image
                src={banner1}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>

          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <Image
                src={banner3}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <Image
                src={banner2}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="rounded-2xl h-full w-full overflow-hidden">
              <Image
                src={banner4}
                alt=""
                className="object-cover object-center h-full w-full"
              />
            </figure>
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-1 lg:col-span-3 flex items-center justify-center flex-col bg-white rounded-lg px-4 py-3 gap-4 box-shadow-card"
      >
        <h2 className="text-2xl font-bold text-primary text-shadow">
          Enquire Now
        </h2>
        <EnquiryForm isProductInput={false} />
      </motion.div>
    </section>
  );
};

export default Hero;
