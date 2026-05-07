import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import Footer from "../components/Footer";

const WorkDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back link */}
      <div className="p-8">
        <Link
          to="/work"
          className="text-xl uppercase font-bold tracking-widest"
        >
          ← Back
        </Link>
      </div>

      {/* Main content */}
      <div className="flex flex-1 px-16 pb-16 gap-12">
        {/* Left — images stacked */}
        <div className="flex flex-col gap-6 w-1/2">
          <img
            src={project.img}
            alt={project.title}
            className="w-full rounded-xl object-cover"
          />
          <img
            src={project.img}
            alt={project.title}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Right — text */}
        <div className="flex flex-col justify-center w-1/2 text-right">
          <h1 className="text-8xl font-black uppercase leading-none mb-8">
            {project.title}
          </h1>
          <p className="text-xl text-gray-500 max-w-md ml-auto">
            {project.desc}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WorkDetail;
