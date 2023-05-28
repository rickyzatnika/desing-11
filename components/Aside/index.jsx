/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import AOSWrapper from "../AOS/AOSWrapper";
import { images } from "../MyImage";
import Navbar from "../Navbar";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Aside = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    fade: true,
    className: "w-full h-full ",

    afterChange: (current) => setActiveIndex(current),
  };

  return (
    <>
      <AOSWrapper>
        <div className="w-full  overflow-hidden  min-h-screen flex flex-col items-center justify-center">
          {/* <Canvas /> */}
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className="fixed z-40 top-6 titles text-[#6F4E37] text-2xl "
          >
            Wedding Invitation
          </div>

          <Navbar />
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="w-[36%]  p-1 flex items-center justify-center fixed  z-30"
          >
            <Slick {...settings}>
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image.src}
                  alt=""
                  placeholder="blur"
                  blurdataurl={image.src}
                  className="w-80 h-auto relative object-cover shadow-md shadow-black  rounded-full "
                />
              ))}
            </Slick>
            <div className="absolute  rounded-full bg-gradient-to-t from-[#000000] via-transparent to-[#FFFDD0] top-0 z-30 w-full h-full" />
          </div>

          <div className="flex flex-col gap-9 items-center justify-center fixed bottom-16 z-30">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-center capitalize"
            >
              <div className="flex items-center gap-1">
                <h1
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl text-zinc-100 font-[parisienne] tracking-widest"
                >
                  Rio
                </h1>
                <span className="text-5xl font-[parisienne] text-zinc-100">
                  &
                </span>
                <h1 className="text-3xl text-zinc-100 font-[parisienne] tracking-widest">
                  Nisa
                </h1>
              </div>
            </div>
            <p className="titles text-[#6F4E37] py-0 text-2xl">
              10 September 2023
            </p>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Aside;
