import React from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";

import Link from "next/link";
import { SlSocialInstagram } from "react-icons/sl";

import "animate.css";

const Profile = () => {
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full min-h-screen bg-gradient-to-b from-[#FBFBFB] to-[#f7f5f5]  flex flex-col items-center justify-center py-10 lg:justify-between relative "
          id="profile"
        >
          {/* {showQrCode && <GetQrCode setShowQrCode={setShowQrCode} />} */}

          <div className="bg-[#f7f5f5] rounded-3xl shadow-lg shadow-black/10 w-[93%] md:w-[80%] py-12 relative  flex flex-col items-center justify-center  h-full  z-30">
            <div className="flex shadow-inner overflow-hidden w-fit bg-[#FBFBFB] p-6 sm:p-8 px-10 sm:px-14 shadow-black/20 flex-col justify-center gap-0 items-center relative mx-auto">
              <div className="animated-element absolute -bottom-8 -left-12 w-full">
                <Image
                  src="/img/bunga.png"
                  width={150}
                  height={150}
                  priority
                  alt=""
                  className="bg-goyang"
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="relative overflow-hidden"
              >
                <div className="absolute left-0 right-0 w-full h-full z-10 bg-gradient-to-t from-zinc-400/70 to-black/20 rounded-t-full  " />
                <Image
                  src="/img/gallery/man.png"
                  alt=""
                  width={160}
                  height={200}
                  className="rounded-t-full"
                  objectFit="cover"
                  priority
                />
              </div>

              <div className="animated-element flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles text-2xl text-[#6C5B7B] capitalize "
                >
                  Satrio Kusuma
                </h2>
                <Link
                  href="https://instagram.com/rahmadi.irawansyah"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    size={22}
                    className="text-zinc-400 mb-2 animate-spin hover:animate-none"
                  />
                </Link>
                <div className="text-center text-[#9c8b7a] ">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-zinc-500 text-sm"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles text-zinc-500 text-lg"
                  >
                    Bpk. Irawan Yusmiatna{" "}
                  </p>
                  <p
                    className="text-zinc-500"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles text-zinc-500 text-lg"
                  >
                    Ibu Rosmini
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="brush text-6xl my-3 text-[#6C5B7B]  "
            >
              &
            </div>
            <div className="relative  overflow-hidden shadow-inner bg-zinc-50  p-6 sm:p-8 px-10 sm:px-14 w-fit shadow-black/20  flex flex-col items-center justify-center gap-0">
              <div className="absolute -bottom-8 -right-14 ">
                <Image
                  src="/img/bunga.png"
                  width={150}
                  height={150}
                  priority
                  alt=""
                  className="bg-goyang "
                />
              </div>
              <div
                data-aos="zoom-in"
                data-aos-duration="800"
                className="relative overflow-hidden"
              >
                <div className="absolute  left-0 right-0 w-full h-full z-10 bg-gradient-to-t from-zinc-400/70 via-transparent rounded-t-full to-black/20  " />
                <Image
                  src="/img/gallery/girl.png"
                  alt=""
                  width={160}
                  height={200}
                  objectFit="cover"
                  className="rounded-t-full"
                  priority
                />
              </div>

              <div className="flex flex-col gap-2 items-center justify-center px-4">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="titles text-2xl text-[#6C5B7B] capitalize "
                >
                  Nisa Ayu Hartati
                </h2>
                <Link
                  href="https://instagram.com/dindanovitas"
                  target="_blank"
                  passHref
                  prefetch={false}
                >
                  <SlSocialInstagram
                    className="text-zinc-400 mb-2  animate-spin hover:animate-none"
                    size={22}
                  />
                </Link>
                <div className="text-center text-zinc-500">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="alex text-sm"
                  >
                    Putra dari :
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="titles  text-lg"
                  >
                    Bpk. Irawan Yusmiatna{" "}
                  </p>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    &
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="titles text-lg"
                  >
                    Ibu Rosmini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Profile;
