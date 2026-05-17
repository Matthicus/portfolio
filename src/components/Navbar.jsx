import logoFull from "../assets/logo_portfolio_matthicestorms.png";
import logoFace from "../assets/logo_portfolio_gezichtmondopen_matthicestorms.png";
import logoText from "../assets/logo_portfolio_zondergezicht_matthicestorms.png";
import insta from "../assets/instagram-53.png";
import whatsapp from "../assets/whatsapp.png";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const Navbar = () => {
  const { lang, toggleLang } = useLang();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-around lg:justify-between pt-4 lg:pt-15 pb-5 px-6 md:px-20 lg:px-40">
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
        <li>
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
        <li className="flex gap-3 lg:gap-3">
          <a
            href="https://wa.me/32468217828"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              className="h-10 w-10 lg:h-8 lg:w-8"
              alt="WhatsApp"
              loading="lazy"
            />
          </a>
          <a
            href="https://www.instagram.com/matthicestorms/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={insta}
              className="h-10 w-10 lg:h-8 lg:w-8"
              alt="Instagram"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
