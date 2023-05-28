import React, { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import AOSWrapper from "../AOS/AOSWrapper";
import Image from "next/legacy/image";
import Link from "next/link";

const Gift = () => {
  const [copyText, setCopyText] = useState(true);
  const [activeButton, setActiveButton] = useState("button1");

  const bniClick = () => {
    setCopyText(false);
    setTimeout(() => {
      setCopyText(true);
    }, 1000);
    navigator.clipboard.writeText("0123456789");
    return () => clearTimeout();
  };
  // ====================================================
  const bcaClick = () => {
    setCopyText(false);
    setTimeout(() => {
      setCopyText(true);
    }, 1000);
    navigator.clipboard.writeText("012345678");
    return () => clearTimeout();
  };
  return (
    <>
      <AOSWrapper>
        <div className="w-full overflow-hidden min-h-3xl bg-[#FFFDD0] pb-14 px-4 flex items-center pt-8 ">
          <div className=" w-full mx-auto bg-[#F5F5F5] pt-4 pb-8 rounded-[50px] h-full lg:w-5/6 px-2 lg:px-12 shadow-lg shadow-black/10 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-3 items-center justify-center">
              <div className="bg-gradient-to-tl from-[#F5F5F5] py-2 via-zinc-600 to-[#E6E6FA]  bg-clip-text text-transparent">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className=" text-2xl  w-fit border-b border-zinc-400 alex"
                >
                  Share
                </h3>
                <p
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="font-[parisienne] bg-gradient-to-tl from-[#E6E6FA] py-2 via-zinc-600 to-[#E6E6FA]  bg-clip-text text-transparent relative left-4 text-5xl "
                >
                  Love
                </p>
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-center  text-sm text-zinc-400/80 leading-relaxed"
              >
                Doa dan restu Anda pada pernikahan kami sudah cukup sebagai
                hadiah, tetapi jika Anda ingin memberikan lebih, kami senang
                menerimanya dan itu akan melengkapi kebahagiaan kami bahkan
                lebih.
              </p>
            </div>
            <div className="flex gap-3 pt-6">
              <button
                className={` tracking-widest ${
                  activeButton === "button1"
                    ? "border px-8 py-1 text-zinc-200 rounded-full shadow-md bg-[#29819cc5]"
                    : "border px-8 py-1 text-zinc-400 rounded-full bg-zinc-100"
                }`}
                onClick={() => setActiveButton("button1")}
              >
                BNI
              </button>
              <button
                className={` tracking-widest ${
                  activeButton === "button2"
                    ? "border px-8 py-1 text-zinc-200 rounded-full shadow-md bg-[#023497ae]"
                    : "border px-8 py-1 text-zinc-400 rounded-full bg-zinc-100"
                }`}
                onClick={() => setActiveButton("button2")}
              >
                BCA
              </button>
            </div>
            {activeButton === "button1" && (
              <div className="flex flex-col items-center justify-center pt-[1.6rem]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="flex items-center flex-col">
                    <Image
                      data-aos="fade-right"
                      data-aos-duration="1000"
                      src="/image/bni.png"
                      alt=""
                      width={75}
                      height={50}
                      objectFit="contain"
                      objectPosition="top"
                      priority
                    />
                    <p
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      className="text-zinc-500 titles font-semibold text-md uppercase sm:text-lg mb-2 tracking-wider"
                    >
                      Satrio Kusuma
                    </p>
                    <p
                      data-aos="fade-right"
                      data-aos-duration="1300"
                      className="text-zinc-500 text-sm sm:text-md  tracking-wide"
                    >
                      NO.REK : 0123456789
                    </p>
                  </div>
                  {copyText === true ? (
                    <button
                      onClick={bniClick}
                      className="flex items-center rounded gap-1 mt-5 py-2  px-6 bg-gradient-to-tr from-[#F5F5F5] via-[#E6E6FA] to-[#F5F5F5] shadow-md text-zinc-500"
                    >
                      <AiOutlineCopy size={18} />
                      <span className="text-sm tracking-wider">Salin</span>
                    </button>
                  ) : (
                    <button
                      onClick={bniClick}
                      className="flex items-center rounded gap-1 mt-5 py-2 text-stone-500 px-4 bg-gradient-to-tr from-[#F5F5F5] via-[#E6E6FA] to-[#F5F5F5] shadow-md shadow-zinc-300"
                    >
                      <span className="text-sm tracking-wider">Disalin</span>
                    </button>
                  )}
                  <Link
                    href="https://dboard.webqodes.com"
                    target="_blank"
                    className="flex items-center rounded gap-1 mt-5 py-2  px-4 bg-gradient-to-tr from-[#F5F5F5] via-[#E6E6FA] to-[#F5F5F5] shadow-md shadow-zinc-300 text-zinc-500"
                  >
                    <BsWhatsapp size={18} />
                    <span className="text-sm tracking-wider">Konfirmasi</span>
                  </Link>
                </div>
              </div>
            )}
            {activeButton === "button2" && (
              <div className="flex flex-col items-center pt-[1.6rem] justify-center ">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <div className="flex items-center flex-col">
                    <Image
                      data-aos="fade-left"
                      data-aos-duration="1000"
                      src="/image/bca.png"
                      alt=""
                      width={100}
                      height={50}
                      objectFit="contain"
                      objectPosition="top"
                      priority
                    />
                    <p
                      data-aos="fade-left"
                      data-aos-duration="1200"
                      className="text-zinc-500 titles font-semibold text-md uppercase sm:text-lg mb-2 tracking-wider"
                    >
                      Nisa Ayu Hartati
                    </p>
                    <p
                      data-aos="fade-left"
                      data-aos-duration="1300"
                      className="text-zinc-500 text-sm sm:text-md  tracking-wide"
                    >
                      NO.REK : 012345678
                    </p>
                  </div>
                  {copyText === true ? (
                    <button
                      onClick={bcaClick}
                      className="flex items-center rounded gap-1 mt-5 py-2  px-6 bg-gradient-to-tr from-[#F5F5F5] via-[#E6E6FA] to-[#F5F5F5] shadow-md shadow-zinc-300  text-zinc-500"
                    >
                      <AiOutlineCopy size={18} />
                      <span className="text-sm tracking-wider">Salin</span>
                    </button>
                  ) : (
                    <button
                      onClick={bcaClick}
                      className="flex items-center rounded gap-1 mt-5 py-2 px-4 bg-gradient-to-tr from-[#F5F5F5] via-[#E6E6FA] to-[#F5F5F5] shadow-md shadow-zinc-300 text-zinc-500"
                    >
                      <span className="text-sm tracking-wider">Disalin</span>
                    </button>
                  )}
                  <Link
                    href="https://dboard.webqodes.com"
                    target="_blank"
                    className="flex items-center rounded gap-1 mt-5 py-2  px-4 bg-gradient-to-tr from-[#F5F5F5] via-[#E6E6FA] to-[#F5F5F5] shadow-md shadow-zinc-300  text-zinc-500"
                  >
                    <BsWhatsapp size={18} />
                    <span className="text-sm tracking-wider">Konfirmasi</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Gift;
