import { motion } from "motion/react";
import { Link } from "react-router-dom";

import projects from "../data/projects";

const springBounce = { type: "spring", stiffness: 400, damping: 12 };

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const Work = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          id="work"
          className="scroll-mt-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Link to={`/work/${project.id}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl cursor-pointer"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {project.img.endsWith(".mp4") ? (
                    <motion.video
                      src={project.img}
                      autoPlay
                      loop
                      muted
                      playsInline
                      ref={(el) => {
                        if (el) el.playbackRate = 2;
                      }}
                      className="w-full rounded-xl"
                      variants={{
                        rest: { y: 0, scale: 1 },
                        hover: {
                          y: -16,
                          scale: 1.04,
                          transition: springBounce,
                        },
                      }}
                    />
                  ) : (
                    <motion.img
                      src={project.img}
                      loading="lazy"
                      alt={project.title}
                      className="w-full rounded-xl"
                      variants={{
                        rest: { y: 0, scale: 1 },
                        hover: {
                          y: -16,
                          scale: 1.04,
                          transition: springBounce,
                        },
                      }}
                    />
                  )}

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-white px-4 py-3"
                    variants={{
                      rest: { y: "100%", opacity: 0 },
                      hover: {
                        y: "0%",
                        opacity: 1,
                        transition: {
                          ...springBounce,
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
            </motion.div>
          ))}
        </motion.section>
      </main>
    </div>
  );
};

export default Work;
