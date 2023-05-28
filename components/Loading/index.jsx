import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/legacy/image";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 300);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.asPath, router.events]);

  return (
    loading && (
      <div className="relative w-full bg-[#f7f6f0] min-h-screen z-[9999] transition-all items-center text-center justify-center duration-200 ease-linear grid grid-cols-12 bottom-0 left-0 ">
        <motion.div
          initial={{ scale: 2, opacity: 1 }}
          animate={{ scale: 0.7, opacity: 0.5 }}
          transition={{ duration: 0.9 }}
          className="absolute top-0 right-0"
        >
          <Image
            src="/img/bunga-2.png"
            alt=""
            width={240}
            height={240}
            objectFit="cover"
            priority
          />
        </motion.div>
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1.8, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-xl alex w-full h-screen flex items-center justify-center absolute left-0 top-0 right-0 text-center invitation text-zinc-500"
        >
          Terima Kasih
        </motion.h1>

        <motion.div
          initial={{ height: 400 }}
          animate={{ height: 0 }}
          transition={{ duration: 0.9 }}
          className="col-span-6 bg-[ #9A5F38]  w-full h-full absolute bottom-0 right-0"
        ></motion.div>
      </div>
    )
  );
}

export default Loading;
