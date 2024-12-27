
const Contact = () => {
  return <>

      

<div className="mx-auto max-w-xl bg-black p-8 text-center rounded-lg shadow-lg">
  <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-white lg:mb-8 opacity-75">
    Have a project in mind ? Fill out the form below, and I'll get back to you with a personalized quote.
    <br />
   <span className="text-green-400 font-extrabold">...</span>
    <br />
  </p>

  <form
    className="mx-auto mb-4 max-w-sm text-left"
    name="wf-form-password"
    method="get"
  >
    <div className="mb-4">
      <label htmlFor="name-2" className="block mb-2 text-xs text-white">
        Your Name
      </label>
      <input
        type="text"
        id="name-2"
        placeholder="Enter your name"
        className="block w-full px-4 py-2 text-black bg-white border border-solid border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="email-2" className="block mb-2 text-xs text-white">
        Email Address
      </label>
      <input
        type="email"
        id="email-2"
        placeholder="Enter your email"
        className="block w-full px-4 py-2 text-black bg-white border border-solid border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="project-brief" className="block mb-2 text-xs text-white">
        Project Brief
      </label>
      <textarea
        id="project-brief"
        placeholder="Tell me about your project..."
        maxLength={5000}
        className="block w-full p-4 text-black bg-white border border-solid border-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 min-h-32"
      ></textarea>
    </div>

    <div>
      <input
        type="submit"
        value="Get Free Quote"
        className="w-full cursor-pointer rounded-md bg-black px-6 py-3 text-white font-semibold  shadow-md hover:text-green-400 transition-all duration-300"
      />
    </div>
  </form>
</div>




      
  </>
};

export default Contact;
