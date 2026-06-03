import logoFull from "../assets/logo_portfolio_matthicestorms.png";
import logoFace from "../assets/logo_portfolio_gezichtmondopen_matthicestorms.png";
import logoText from "../assets/logo_portfolio_zondergezicht_matthicestorms.png";
import insta from "../assets/instagram-53.png";
import whatsapp from "../assets/whatsapp.png";
import burger from "../assets/hamburger_icon.svg";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";
import { motion } from "motion/react";
import { useState } from "react";

const Navbar = () => {
  const { lang, toggleLang } = useLang();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-around lg:justify-between pt-15 lg:pt-4 lg:pt-15 pb-5 px-6 md:px-20 lg:px-40"
      >
        <div className="flex items-center gap-6 lg:gap-12">
          <div className="relative w-28 h-28 md:w-36 md:h-36 cursor-pointer logo-container">
            <img
              src={logoText}
              alt="Storms Matthice text"
              className="absolute inset-0 w-full h-full logo-text"
              loading="lazy"
            />
            <img
              src={logoFull}
              alt="logo"
              className="absolute inset-0 w-full h-full logo-face-smile"
              loading="lazy"
            />
            <img
              src={logoFace}
              alt="logo surprised"
              className="absolute inset-0 w-full h-full opacity-0 logo-face-surprised"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="flex items-center gap-6 lg:gap-12 text-xl lg:text-3xl">
          <li className="hidden lg:block">
            <button
              className="text-2xl lg:text-3xl cursor-pointer"
              onClick={toggleLang}
            >
              {lang === "en" ? "NL" : "EN"}
            </button>
          </li>
          <li className="hidden lg:block">
            <a
              href="#about"
              className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
            >
              {t[lang].about}
            </a>
          </li>
          <li className="hidden lg:flex gap-3">
            <a
              href="https://wa.me/32468217828"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={whatsapp}
                className="h-10 w-10 lg:h-8 lg:w-8"
                alt="WhatsApp"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </a>
            <a
              href="https://www.instagram.com/matthicestorms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={insta}
                className="h-10 w-10 lg:h-8 lg:w-8"
                alt="Instagram"
                loading="lazy"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </a>
          </li>
          <li className="lg:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <img src={burger} alt="menu" className="w-10 h-10" />
            </button>
          </li>
        </ul>
      </motion.nav>

      <motion.div
        initial={false}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 bg-white z-60 overflow-hidden lg:hidden"
      >
        <ul className="flex flex-col items-left p-10 pt-5 gap-8 py-2 text-xl">
          <li>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-5 text-2xl"
              aria-label="Close menu"
            >
              ✕
            </button>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              {t[lang].about}
            </a>
          </li>
          <li>
            <button className="text-2xl cursor-pointer" onClick={toggleLang}>
              {lang === "en" ? "NL" : "EN"}
            </button>
          </li>
          <li className="flex gap-3">
            <a
              href="https://wa.me/32468217828"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={whatsapp}
                className="h-7 w-7"
                alt="WhatsApp"
                loading="lazy"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </a>
            <a
              href="https://www.instagram.com/matthicestorms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                src={insta}
                className="h-7 w-7"
                alt="Instagram"
                loading="lazy"
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
