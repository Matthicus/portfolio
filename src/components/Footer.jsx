const Footer = () => {
  return (
    <footer className="w-full p-6 mt-12   bg-yellow-300 p-12">
      <div className="flex flex-wrap justify-around gap-8 items-center">
        <section className="flex  flex-col gap-2">
          <h1 className="text-6xl md:text-7xl lg:text-8xl text-center  footer-title bg-white p-2 rounded-xl">
            HIT ME UP!
          </h1>
          <div className="flex flex-wrap gap-1 sm:gap-4 justify-center  ">
            <a
              href="mailto:matthice.storms@hotmail.com"
              className="text-3xl  hover:text-white cursor-pointer "
            >
              matthice.storms@hotmail.com
            </a>
            <p className="text-3xl  cursor-pointer hover:text-white">
              linkedin.com/in/matthice
            </p>
          </div>
        </section>
        <section className="flex flex-col items-center  gap-1">
          <p className="text-2xl bg-white p-2 rounded-xl antwerp">
            Antwerp, Belgium
          </p>
          <p className="text-2xl">Storms Matthice '26 &copy;</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
