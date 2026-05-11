import summer from "../assets/picture_about_summer.webp";
import snow from "../assets/picture_about_snow.webp";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";

const About = () => {
  const { lang } = useLang();
  return (
    <section
      id="about"
      className=" scroll-mt-24 flex flex-col md:flex-row items-center max-w-2xl mx-auto px-6 py-24 gap-12"
    >
      <div className="flex-1">
        <h1 className="text-9xl font-bold mb-8">{t[lang].hi}</h1>
        <p className="text-gray-600 mb-6 text-2xl intro-text">
          {t[lang].intro1}{" "}
          <span className="bg-yellow-300">{t[lang].intro2}</span>{" "}
          {t[lang].intro3}{" "}
          <span className="bg-yellow-300">{t[lang].intro4}</span>{" "}
          {t[lang].intro5}{" "}
          <span className="bg-yellow-300">{t[lang].intro6}</span>{" "}
          {t[lang].intro7}
        </p>
      </div>

      <div className="flex md:flex-col gap-4 flex-1 min-w-0">
        <img src={summer} alt="summer" className="rounded-xl w-full min-w-0" />
        <img src={snow} alt="snow" className="rounded-xl w-full min-w-0" />
      </div>
    </section>
  );
};

export default About;
