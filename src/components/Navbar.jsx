import logoFull from "../assets/logo_portfolio_matthicestorms.png";
import logoFace from "../assets/logo_portfolio_gezichtmondopen_matthicestorms.png";
import logoText from "../assets/logo_portfolio_zondergezicht_matthicestorms.png";
import insta from "../assets/instagram-53.png";
import whatsapp from "../assets/whatsapp.png";

const Navbar = () => {
  return (
    <nav className=" fixed top-0 left-0 right-0 bg-white z-50 flex items-center justify-between pt-15 pb-5 px-40 ">
      <div className="relative w-36 h-36 cursor-pointer logo-container">
        {/* Text layer - goes behind */}
        <img
          src={logoText}
          alt="Storms Matthice text"
          className="absolute inset-0 w-full h-full logo-text"
        />

        {/* Smiling face - default state */}
        <img
          src={logoFull}
          alt="logo"
          className="absolute inset-0 w-full h-full logo-face-smile"
        />

        {/* Surprised face - shows on hover */}
        <img
          src={logoFace}
          alt="logo surprised"
          className="absolute inset-0 w-full h-full opacity-0 logo-face-surprised"
        />
      </div>
      <ul className="flex items-center gap-12 text-3xl">
        <li>
          <a
            href="#about"
            className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </a>
        </li>
        <div className="flex gap-3">
          <li>
            <img src={whatsapp} className="h-8 w-8 cursor-pointer" alt="" />
          </li>
          <li>
            <img src={insta} className="h-8 w-8 cursor-pointer" alt="" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
