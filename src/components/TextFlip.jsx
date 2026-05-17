import { useState, useEffect } from "react";
import { motion } from "motion/react";
import menuHero from "../assets/menu_hero_page.webp";
import dudeHero from "../assets/dude_hero_page.webp";
import coffeeHero from "../assets/coffee_hero_page.webp";
import chipsHero from "../assets/chips_hero_page.webp";
import alienhero from "../assets/alien_hero_page.webp";
import { Link } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const images = [
  { src: menuHero, alt: "Menu", rotate: "-4deg" },
  { src: dudeHero, alt: "Dude", rotate: "3deg" },
  { src: coffeeHero, alt: "Coffee", rotate: "-2deg" },
  { src: alienhero, alt: "Alien", rotate: "5deg" },
  { src: chipsHero, alt: "Fish & Chips", rotate: "-3deg" },
];

const positions = [
  { top: "30px", left: "0px" },
  { top: "10px", left: "220px" },
  { top: "20px", left: "440px" },
  { top: "0px", left: "660px" },
  { top: "25px", left: "880px" },
];

const springSnappy = { type: "spring", stiffness: 400, damping: 6, mass: 0.3 };
const springSmooth = { type: "spring", stiffness: 180, damping: 18, mass: 1.2 };

const hoverProps = { scale: 1.05, zIndex: 10, transition: springSnappy };
const tapProps = { scale: 0.9, transition: springSnappy };

const TextFlip = () => {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { lang } = useLang();

  useEffect(() => {
    const handleResize = () => {
      setScale(Math.min(1, window.innerWidth / 1300));
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="pt-12 pb-12">
      {/* Mobile grid */}
      <div className="lg:hidden grid grid-cols-2 gap-3 px-4">
        {images.map((img, i) => (
          <motion.img
            loading="lazy"
            key={i}
            src={img.src}
            alt={img.alt}
            className={
              i === 4 ? "col-span-2 mx-auto w-2/3" : "w-full rounded-xl"
            }
            style={{ rotate: img.rotate }}
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            animate={{ opacity: 1, y: isMobile ? [0, -8, 0] : 0, scale: 1 }}
            whileHover={hoverProps}
            whileTap={tapProps}
            transition={{
              delay: i * 0.2,
              opacity: { duration: 0.5 },
              scale: springSmooth,
              y: isMobile
                ? {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }
                : springSmooth,
            }}
          />
        ))}
      </div>

      {/* Desktop layout */}
      <div className="hidden lg:block w-full overflow-hidden">
        <div
          style={{
            position: "relative",
            height: "380px",
            width: "1180px",
            pointerEvents: "none",
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            marginLeft: `calc(50% - ${(1180 * scale) / 2}px)`,
          }}
        >
          {images.map((img, i) => (
            <motion.img
              loading="lazy"
              key={i}
              src={img.src}
              alt={img.alt}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                pointerEvents: "auto",
                position: "absolute",
                width: "300px",
                rotate: img.rotate,
                zIndex: i,
                cursor: "pointer",
                ...positions[i],
              }}
              whileHover={hoverProps}
              whileTap={tapProps}
              transition={{ delay: i * 0.2, ...springSmooth }}
            />
          ))}
        </div>
      </div>

      <Link to="/work">
        <h2 className="max-w-[1180px] mx-auto px-6 text-center lg:text-right text-5xl lg:text-3xl font-bold mt-4 lg:-mt-8 cursor-pointer">
          {t[lang].moreWork}
        </h2>
      </Link>
    </section>
  );
};

export default TextFlip;
