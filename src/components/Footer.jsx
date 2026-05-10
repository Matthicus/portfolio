import { useLang } from "../context/LanguageContext";
import { t } from "../translations";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const Footer = () => {
  const { lang } = useLang();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);

  return (
    <motion.footer
      ref={ref}
      style={{ scaleY, y, transformOrigin: "bottom" }}
      className="noise w-full bg-gradient-to-b from-yellow-300 to-white p-12 rounded-t-4xl"
    >
      <div className="flex flex-wrap justify-around gap-8 items-center">
        <section className="flex flex-col gap-2">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center footer-title bg-white p-2 rounded-xl">
            {t[lang].contact}
          </h1>
          <div className="flex flex-wrap gap-1 sm:gap-4 justify-center">
            <a
              href="mailto:matthice.storms@hotmail.com"
              className="text-3xl hover:text-white cursor-pointer"
            >
              matthice.storms@hotmail.com
            </a>

            <p className="text-3xl cursor-pointer hover:text-white">
              linkedin.com/in/matthice
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center gap-1">
          <p className="text-2xl bg-white p-2 rounded-xl antwerp">
            {t[lang].locatie}
          </p>
          <p className="text-2xl">Storms Matthice '26 &copy;</p>
        </section>
      </div>
    </motion.footer>
  );
};

export default Footer;
