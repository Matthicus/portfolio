import { useState } from "react";
import { motion } from "motion/react";
import menuHero from "../assets/menu_hero_page.png";
import dudeHero from "../assets/dude_hero_page.png";
import coffeeHero from "../assets/coffee_hero_page.png";
import chipsHero from "../assets/chips_hero_page.png";
import alienhero from "../assets/alien_hero_page.png";
import { Link } from "react-router-dom";

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

const TextFlip = () => {
  return (
    <section className="  pt-12 pb-12">
      <div
        style={{
          position: "relative",
          height: "380px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          pointerEvents: "none",
        }}
      >
        {images.map((img, i) => (
          <motion.img
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
            whileHover={{
              scale: 1.05,
              zIndex: 10,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 6,
                mass: 0.3,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 6,
                mass: 0.3,
              },
            }}
            transition={{
              delay: i * 0.2,
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 1.2,
            }}
          />
        ))}
      </div>
      <Link to="/work">
        <h2 className="max-w-[1180px] mx-auto px-6 text-right text-3xl font-bold -mt-8 cursor-pointer">
          More work &rarr;
        </h2>
      </Link>
    </section>
  );
};

export default TextFlip;
