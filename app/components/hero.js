import Link from "next/link";

// components/Hero.js
const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-16 bg-red-500 text-white">
        <div className="md:w-1/2 p-5 md:ml-10">
          <div className="hero-content">
            <div className="hero-text mb-10">
              <p className="text-lg">I'm</p>
              <h1 className="text-4xl font-bold mb-5 mt-5">Abel Gashaw</h1>
              <h2 className="text-xl"></h2>
              <div className="typed-text text-lg">
                Web Designer, Web Developer, Front End Developer
              </div>
            </div>
            <div className="hero-btn space-x-4">
              <a
                className="btn bg-white text-red-500 font-semibold py-2 px-4 rounded  hover:text-white hover:bg-red-400"
                href="/ABEL-GASHAW-CV.pdf"
                target="_blank"
              >
                View CV
              </a>
              <Link
                className="btn bg-white text-red-500 font-semibold py-2 px-4 rounded hover:text-white hover:bg-red-400"
                href="#contact"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <div className="hero-image">
            <img
              src="/images/Profile .jpg"
              alt="Hero Image"
              className="w-3/4 rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
