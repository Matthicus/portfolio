const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-8 mx-20 mt-25 min-h-screen bg-gray-900 flex flex-col items-center justify-center rounded-tl-[80px] rounded-br-[80px] relative"
    >
      <h2
        className="text-8xl font-black italic mb-16 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          WebkitTextStroke: "2px #FCD34D",
          WebkitTextFillColor: "#FCD34D",
        }}
      >
        CONTACT ME
      </h2>

      <form className="w-full max-w-4xl">
        {/* Firstname and Name - side by side */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-white block mb-2" htmlFor="firstname">
              Firstname
            </label>
            <input
              className="w-full p-3 rounded bg-gray-600 text-white border-none outline-none"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="James"
            />
          </div>

          <div>
            <label className="text-white block mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 rounded bg-gray-600 text-white border-none outline-none"
              type="text"
              id="name"
              name="name"
              placeholder="De Santa"
            />
          </div>
        </div>

        {/* Email - full width */}
        <div className="mb-4">
          <label className="text-white block mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-3 rounded bg-gray-600 text-white border-none outline-none"
            type="email"
            id="email"
            name="email"
            placeholder="James@desanta@hotmail.com"
          />
        </div>

        {/* Message - full width */}
        <div className="mb-4">
          <label className="text-white block mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full p-3 rounded bg-gray-600 text-white h-32 resize-none border-none outline-none"
            id="message"
            name="message"
            placeholder="Hi Matthice, after reviewing your super awesome portfolio..."
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
