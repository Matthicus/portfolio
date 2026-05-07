import Footer from "../components/Footer";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import projects from "../data/projects";
const Work = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <div className="text-right  pt-15 pr-17">
          <Link
            to="/"
            className="inline-block text-3xl pl-6 cursor-pointer hover:bg-yellow-300"
          >
            &larr; Home
          </Link>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16">
          {projects.map((project, i) => (
            <Link to={`/work/${project.id}`} key={i}>
              <motion.div
                className="group relative overflow-hidden rounded-xl cursor-pointer"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* Image bounces up */}
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full rounded-xl"
                  variants={{
                    rest: { y: 0, scale: 1 },
                    hover: {
                      y: -16,
                      scale: 1.04,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 12,
                      },
                    },
                  }}
                />

                {/* Text shoots out from bottom with a bounce */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3"
                  variants={{
                    rest: { y: "100%", opacity: 0 },
                    hover: {
                      y: "0%",
                      opacity: 1,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 18,
                        delay: 0.03,
                      },
                    },
                  }}
                >
                  <h3 className="font-bold project-title text-4xl uppercase text-center">
                    {project.title}
                  </h3>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
