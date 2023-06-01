import Link from "next/link";
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BiHomeHeart } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { RiGalleryLine } from "react-icons/ri";

const NavMobile = () => {
  const [activeSection, setActiveSection] = useState("header");
  const [scrollToSection, setScrollToSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "header",
        "profile",
        "invitation",
        "event",
        "gallery",
        "wish",
      ];
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach((section) => {
        const sectionEl = document.getElementById(section);

        if (!sectionEl) return;

        const sectionTop = sectionEl.offsetTop;
        const sectionBottom = sectionEl.offsetTop + sectionEl.offsetHeight;

        if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, scrollToSection]);

  const handleClick = (event, section) => {
    event.preventDefault();
    setTimeout(() => {
      setActiveSection(section);
    }, 1000);
    setScrollToSection(true);
    scroll.scrollTo(document.getElementById(section).offsetTop);
  };

  return (
    <nav
      className={
        activeSection && document.querySelector(`#${activeSection}`)
          ? "w-full px-2 scale-100 flex lg:hidden fixed bottom-3 z-40 transition-all duration-300 ease-linear"
          : "scale-0 transition-all duration-300 ease-linear"
      }
    >
      <ul className="w-full  bg-zinc-50/70  shadow-md shadow-zinc-600/40 backdrop-blur flex items-center justify-around rounded-full h-full py-2  px-6">
        <li
          className={`relative group flex  flex-col-reverse items-center justify-center ${
            activeSection === "header" ? "text-[#3B302F]" : ""
          }`}
        >
          <span
            className={
              activeSection === "header" ? " text-xs" : "hidden left-0 absolute"
            }
          >
            Invitation
          </span>
          <Link
            href="#header"
            className="nav-link"
            onClick={(event) => handleClick(event, "header")}
          >
            <BiHomeHeart size={28} className="text-[#3B302F]" />
          </Link>
        </li>
        <li
          className={`relative group flex  flex-col-reverse items-center justify-center ${
            activeSection === "profile" ? "text-[#3B302F]" : ""
          }`}
        >
          <span
            className={
              activeSection === "profile"
                ? " text-xs   "
                : "hidden  left-0 absolute   "
            }
          >
            Profile
          </span>
          <Link
            href="#profile"
            className="nav-link"
            onClick={(event) => handleClick(event, "profile")}
          >
            <ImProfile size={28} className="text-[#3B302F]" />
          </Link>
        </li>
        <li
          className={`relative group flex flex-col-reverse items-center justify-center ${
            activeSection === "event" ? "text-[#3B302F]" : ""
          }`}
        >
          <span
            className={
              activeSection === "event"
                ? " text-xs    "
                : "hidden left-0 absolute  "
            }
          >
            Event
          </span>
          <Link
            href="#event"
            className="nav-link"
            onClick={(event) => handleClick(event, "event")}
          >
            <BsCalendarDate size={28} className="text-[#3B302F]" />
          </Link>
        </li>
        <li
          className={`relative group flex  flex-col-reverse items-center justify-center ${
            activeSection === "gallery" ? "text-[#3B302F]" : ""
          }`}
        >
          <span
            className={
              activeSection === "gallery"
                ? " text-xs"
                : "hidden  left-0 absolute"
            }
          >
            Gallery
          </span>
          <Link
            href="#gallery"
            className="nav-link"
            onClick={(event) => handleClick(event, "gallery")}
          >
            <RiGalleryLine size={28} className="text-[#3B302F]" />
          </Link>
        </li>
        <li
          className={`relative group flex  flex-col-reverse items-center justify-center ${
            activeSection === "wish" ? "text-[#3B302F]" : ""
          }`}
        >
          <span
            className={
              activeSection === "wish" ? " text-xs" : "hidden  left-0 absolute"
            }
          >
            Wish
          </span>
          <Link
            href="#wish"
            className="nav-link"
            onClick={(event) => handleClick(event, "wish")}
          >
            <AiOutlineComment size={28} className="text-[#3B302F]" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
