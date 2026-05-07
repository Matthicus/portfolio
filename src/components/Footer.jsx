const Footer = () => {
  return (
    <footer className="w-full p-6 mt-12   bg-yellow-300 p-12">
      <div className="flex justify-around gap-50 items-center">
        <section className="flex flex-col">
          <h1 className="text-8xl  footer-title bg-white p-2 rounded-xl">
            HIT ME UP!
          </h1>
          <div className="flex gap-5">
            <p className="text-xl hover:text-white cursor-pointer">
              matthice.storms@hotmail.com
            </p>
            <p className="text-xl cursor-pointer hover:text-white">
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
