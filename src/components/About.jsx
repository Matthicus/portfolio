import summer from "../assets/picture_about_summer.png";
import snow from "../assets/picture_about_snow.png";

const About = () => {
  return (
    <section
      id="about"
      className=" scroll-mt-24 flex flex-col md:flex-row items-center max-w-2xl mx-auto px-6 py-24 gap-12"
    >
      <div className="flex-1">
        <h1 className="text-9xl font-bold mb-8">Hi,</h1>
        <p className="text-gray-600 mb-6 text-2xl intro-text">
          I'm Matthice, an ordinary Flemish guy that's happiest behind the
          screen bringing something new into the world. From{" "}
          <span className="bg-yellow-300">
            branding, to logo, marketing and packaging design
          </span>{" "}
          and everything in between! I also have experience in software
          development, specializing mainly in{" "}
          <span className="bg-yellow-300">web design</span> and frontend
          development. I can work comfortably with{" "}
          <span className="bg-yellow-300">
            Illustrator, Photoshop, InDesign
          </span>{" "}
          and love to build in React. I also dibble dabble in video editing now
          and again. If you liked this poorly written introduction, don't
          hesitate to contact me so we can make something great together!
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
