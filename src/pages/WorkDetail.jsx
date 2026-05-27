import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Footer from "../components/Footer";
import { useLang } from "../context/LanguageContext";
import { t } from "../translations";
import { motion } from "motion/react";

const WorkDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const { lang } = useLang();

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-around pt-12 pb-6 mb-10">
          <div className="flex gap-2 lg:flex-col">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              {project.title}
            </h2>
            <h1 className="text-2xl md:text-3xl font-black italic leading-none">
              {project.kind}
            </h1>
          </div>
          <div className="pt-2 max-w-sm">
            <p className="text-3xl lg:text-2xl text-gray-700 leading-relaxed italic">
              {project.desc[lang]}
            </p>
          </div>
        </div>

        {/* Main large image */}
        <div className="mb-4">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full rounded-xl object-cover"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.images.slice(1).map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`${project.title} ${i + 2}`}
              loading="lazy"
              className="rounded-xl object-cover w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ margin: "-100px" }}
            />
          ))}
        </div>

        {/* Back link */}
        <div className="py-8">
          <Link
            to="/"
            className="text-2xl lg:text-xl uppercase font-bold tracking-widest hover:opacity-50 transition-opacity"
          >
            {t[lang].back}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetail;
