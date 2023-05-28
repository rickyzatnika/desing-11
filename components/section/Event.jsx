import React, { useState, useEffect, useRef } from "react";
import CountDown from "../countdownTimer";
import Image from "next/legacy/image";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { useRouter } from "next/router";
import AOSWrapper from "../AOS/AOSWrapper";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Event = ({ guest }) => {
  const sectionRef = useRef(null);
  const [displayed, setDisplayed] = useState(false);
  // const [showQrCode, setShowQrCode] = useState(false);
  const [showAttend, setShowAttend] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const { uuid } = router.query;
  const { register, handleSubmit } = useForm();

  const attendForm = async ({ status, present }) => {
    try {
      setLoading(true);
      const userId = guest.userId;
      await axios.patch(
        `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );
      if (!status && selectedValue === "not Going") {
        const timeoutId = setTimeout(() => {
          Swal.fire({
            text: "Terima Kasih Atas Perhatiannya 😊",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          });

          setLoading(false);
          setShowAttend(false);
        }, 2000);
        return () => setTimeout(timeoutId);
      } else {
        const timeoutId = setTimeout(() => {
          Swal.fire({
            text: "Terima Kasih Atas Perhatiannya 😊",
            showConfirmButton: false,
            showClass: {
              popup: "animate__animated animate__zoomIn",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOut",
            },
          });
          setLoading(false);
          setShowAttend(false);
        }, 2000);
        return () => clearTimeout(timeoutId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowAttend(true);
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed]);

  return (
    <AOSWrapper>
      <div
        ref={sectionRef}
        className="w-full h-auto py-16  bg-gradient-to-t from-[#f7f5f5] to-[#FFFFFF] relative px-2 overflow-hidden"
        id="event"
      >
        <div
          className="absolute left-0 shadow-inner z-50 rotate-180 py-8 px-1 top-0 titles font-semibold tracking-widest bg-[#F8F8F8]  rounded-tl-3xl text-zinc-700 text-xl"
          style={{ writingMode: "vertical-rl" }}
        >
          SAVE THE DATE
        </div>
        <div className=" w-full gap-8 pb-12 flex flex-col items-center justify-around relative z-40">
          <div className="w-full px-2">
            <CountDown />
          </div>
          <div data-aos="fade-up" data-aos-duration="1500">
            <AddToCalendarButton
              name="The Wedding Rudy & Astrid"
              options={["Google"]}
              location="Jl. Mimpin Tua, Brastagi, Tanah Karo, Sumatera Utara Jl. Mimpin Tua, Brastagi, Tanah Karo, Sumatera Utara, Berastagi, Indonesia"
              startDate="2023-9-10"
              startTime="10:15"
              endTime="14:20"
              timeZone="Asia/Jakarta"
              buttonStyle="neumorphism"
              lightMode="bodyScheme"
              size="1"
            ></AddToCalendarButton>
          </div>

          <div className="flex flex-col gap-6 items-center justify-center"></div>
        </div>
        {guest && guest?.status === "Opened" ? (
          <>
            {showAttend && (
              <div className="w-full md:w-5/6 lg:w-2/6 min-h-screen bg-black/70  fixed z-[999999999] flex items-center justify-center top-0 right-0">
                <motion.div
                  initial={{ y: "-10%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.6,
                    damping: 50,
                  }}
                  className="w-full h-auto px-2 "
                >
                  <form
                    onSubmit={handleSubmit(attendForm)}
                    className="w-full relative  shadow-lg overflow-hidden shadow-black/20 bg-[#F5F5DC] rounded z-50 h-auto  px-3 pt-10 pb-10 flex flex-col items-center justify-center gap-3"
                  >
                    <div className="absolute z-40 -top-2 -right-20 rotate-90 opacity-80">
                      <Image
                        src="/img/bunga.png"
                        alt=""
                        width={300}
                        height={300}
                        priority
                        objectFit="contain"
                      />
                    </div>
                    <div className="w-full flex items-center justify-between pb-8">
                      <div className="flex flex-col">
                        <h3 className="text-2xl  text-stone-500/80 alex">
                          Konfirmasi
                        </h3>
                        <span className="titles text-3xl relative left-10 text-stone-500">
                          Kehadiran
                        </span>
                      </div>
                      <div className=" w-0 h-[2px] bg-[#516C56]" />
                    </div>
                    <div className="w-full leading-relaxed mb-3">
                      <p className="mb-4 text-sm text-stone-400 brush pl-1">
                        <span className="text-red-600/80">*</span> Pilih ya jika
                        anda akan menghadiri acara
                      </p>
                      <div className="flex flex-col flex-nowrap gap-2 px-4 pt-1">
                        <div className="flex flex-nowrap gap-1">
                          <input
                            type="radio"
                            value="going"
                            onChange={() => handleClick("going")}
                            {...register("status", { required: true })}
                            checked={selectedValue === "going"}
                          />
                          <label
                            className="text-stone-500 text-sm sm:text-md"
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick("going");
                            }}
                          >
                            Ya, Saya akan hadir
                          </label>
                        </div>
                        <div className="flex flex-nowrap gap-1">
                          <input
                            type="radio"
                            {...register("status", { required: true })}
                            value="not Going"
                            checked={selectedValue === "not Going"}
                            onChange={() => handleClick("not Going")}
                          />
                          <label
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick("not Going");
                            }}
                            className="text-stone-500  text-sm sm:text-md"
                          >
                            Maaf, Saya tidak bisa hadir
                          </label>
                        </div>
                      </div>
                    </div>
                    {selectedValue === "going" && (
                      <div className="mb-3 w-full ">
                        <h3 className="mb-2 text-xl font-semibold tracking-wider text-center titles text-stone-500">
                          RSVP
                        </h3>
                        <select
                          className="w-full text-sm text-stone-500 py-3 px-2 border-none outline-none rounded focus:outline-stone-400"
                          {...register("present", { required: true })}
                        >
                          <option value="" style={{ display: "none" }}>
                            pilih
                          </option>
                          <option value="1">1 Orang</option>
                          <option value="2">2 Orang</option>
                          <option value="3">3 Orang</option>
                          <option value="lebih dari 3">
                            lebih dari 3 Orang
                          </option>
                        </select>
                      </div>
                    )}

                    {selectedValue && (
                      <button
                        className="py-3 relative z-50 rounded px-7 w-full text-white/80 bg-stone-600  hover:bg-stone-600/90"
                        type="submit"
                      >
                        {loading ? <span>Loading...</span> : <span>Kirim</span>}
                      </button>
                    )}
                  </form>
                </motion.div>
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </AOSWrapper>
  );
};

export default Event;
