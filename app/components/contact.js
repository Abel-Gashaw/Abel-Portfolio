const Contact = () => {
  return (
    <div className="contact py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full md:w-8/12 lg:w-6/12">
            <div className="contact-form">
              {/* Contact Me Title */}
              <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
              
              <form id="contactForm" noValidate>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control w-full px-4 py-2 border rounded-lg"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                  <p className="text-red-500 text-sm mt-1 hidden">Please enter your name.</p>
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control w-full px-4 py-2 border rounded-lg"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                  <p className="text-red-500 text-sm mt-1 hidden">Please enter your email.</p>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control w-full px-4 py-2 border rounded-lg"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                  <p className="text-red-500 text-sm mt-1 hidden">Please enter a subject.</p>
                </div>
                <div className="mb-4">
                  <textarea
                    className="form-control w-full px-4 py-2 border rounded-lg"
                    id="message"
                    placeholder="Message"
                    rows="5"
                    required
                  ></textarea>
                  <p className="text-red-500 text-sm mt-1 hidden">Please enter your message.</p>
                </div>
                <div>
                  <button className="btn bg-red-500 text-white px-6 py-2 rounded-lg" type="submit">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
