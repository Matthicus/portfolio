import summer from "../assets/picture_about_summer.png";
import snow from "../assets/picture_about_snow.png";

const About = () => {
  return (
    <section className=" flex max-w-2xl mx-auto px-6 py-24 gap-12">
      <div className="">
        <h1 className="text-8xl font-bold mb-8">Hi,</h1>
        <p className="text-gray-600 mb-6 text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-gray-600 mb-6 text-2xl">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p className="text-gray-600 text-2xl">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <img src={summer} alt="summer" className="rounded-xl" />
        <img src={snow} alt="snow" className="rounded-xl" />
      </div>
    </section>
  );
};

export default About;
