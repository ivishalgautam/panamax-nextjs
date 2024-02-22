"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import heroImage from "../public/assets/hero-image.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

const Products = () => {
  SwiperCore.use([Autoplay]);
  const { products } = useSelector((state) => state.products);
  return (
    <section className="bg-gradient-to-r from-[#001234] to-[#000123] w-full grid grid-cols-9 px-8 py-12 gap-4">
      <div className="col-span-9 lg:col-span-4 flex items-start justify-center flex-col">
        <h2 className="text-white font-thin text-3xl capitalize">
          our{" "}
          <span className="inline-block font-bold italic text-shadow">
            product categories
          </span>
        </h2>
        <p className="text-white my-4 text-sm">
          Welcome to Panamax, the leading tape manufacturer offering a diverse
          range of high-quality adhesive tapes for all your needs. Discover our
          <Link href="/product/masking-tape"> Masking tape</Link>, Pre-Masking
          Tape, THB Acrylic, Nano-Sil Tape, Mirror Mounting Tape, PMX 5000,
          Electrical Insulation Tape, Dry Wall Joint Tape, PTFE Thread Seal
          Tape, Plate Mounting Tape, PTFE Fiber Tape, Structural Glazing Tape,
          Multi Stick Tape, Anti-Slip Tape, Shuttering Tape, Laminate Fixing
          Tape, Edge Banding Tape, Roof Repair Tape, Leak Stopper Tape, Surface
          Protection Tape, Craft Paper Tape, BOPP Packaging Tape, Floor
          Protection Tape, Wood Guard Tape, Floor Marking Tape, Spacer & Eva,
          Cloth Duct Tape, and Red Polyster Tape. Trust in our expertise as a
          tape manufacturer to deliver reliable self-adhesive solutions for all
          your projects.
        </p>
        {/* <Link className="btn-secondary-product">View more</Link> */}
      </div>

      {/* products */}
      <div className="col-span-9 lg:col-span-5 flex-box-center gap-4 flex-wrap md:flex-nowrap">
        <Swiper
          slidesPerView={2}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            900: { slidesPerView: 2 },
            1440: { slidesPerView: 3 },
          }}
          className="bg-transparent"
        >
          {products.map((product, key) => {
            return (
              <SwiperSlide key={key}>
                <Link href={`product/${product.path}`}>
                  <figure className="w-full">
                    <Image src={product?.image} alt="" className="rounded-lg" />
                  </figure>
                  {/* <h2 className="border-l-[3px] border-white text-white font-[600] text-lg mt-3 text-start pl-6">
                    {product.title}
                  </h2> */}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
