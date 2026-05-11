import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Footer from "../components/Footer";

const WorkDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className=" flex flex-col lg:flex lg:flex-row items-center justify-around pt-12 pb-6 mb-10">
          <div className=" flex gap-2 lg:flex lg:flex-col">
            <h2 className=" text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
              {project.title}
            </h2>
            <h1 className="text-2xl md:text-3xl font-black italic leading-none">
              Logo, 2025
            </h1>
          </div>
          <div className="pt-2  max-w-sm">
            <p className="  text-3xl lg:text-2xl text-gray-700 leading-relaxed  italic">
              {project.desc}
            </p>
          </div>
        </div>

        {/* Main large image */}
        <div className="mb-4">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Two column images */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <img
            src={project.img}
            alt=""
            className="w-full rounded-xl object-cover"
          />
          <img
            src={project.img}
            alt=""
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Back link */}
        <div className="py-8">
          <Link
            to="/work"
            className=" text-2xl lg:text-xl uppercase font-bold tracking-widest hover:opacity-50 transition-opacity"
          >
            ← Back
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetail;
