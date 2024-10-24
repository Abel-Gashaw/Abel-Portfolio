// components/About.js
const About = () => {
    return (
        <div className="about wow fadeInUp" id="about">
            <div className="container mx-auto md:flex-row items-center py-6">
                {/* <div className="md:w-1/2">
                    <div className="about-img">
                        <img src="/img/about.jpg" alt="About Image" className="w-full h-auto" />
                    </div>
                </div> */}
                {/* <div className="md:w-1/2 md:pl-8"> */}
                    {/* <div className="about-content"> */}
                        <div className="section-header text-left mb-6">
                            <p className="text-4xl font-semibold">Learn About Me</p>
                          
                        </div>
                        <div className="about-text mb-6">
  <p>
    I am a passionate and experienced Web Designer, Web Developer, and Front-End Developer specializing in the MERN stack (MongoDB, Express.js, React, and Node.js). With a strong foundation in both back-end and front-end technologies, I create dynamic, responsive, and user-centric web applications.
  </p>
  <p>My expertise extends to:</p>
  <ul className="list-disc ml-5">
    <li><strong>Front-End Technologies:</strong> React, Next.js, Tailwind CSS, HTML, CSS for designing responsive, intuitive, and modern user interfaces.</li>
    <li><strong>Node.js:</strong> For building fast, scalable server-side applications.</li>
    <li><strong>MongoDB:</strong> For designing efficient, flexible databases.</li>
    <li><strong>GitHub:</strong> For version control and seamless collaboration across teams.</li>
    <li><strong>Testing & Deployment:</strong> Ensuring robust, bug-free solutions and smooth product launches.</li>
    <li><strong>VB.NET:</strong> Developing powerful desktop applications, enhancing my versatility as a developer.</li>
  </ul>
  <p>
    Whether it's designing a sleek UI, building an intuitive user experience, or architecting a complex back-end, I am driven by my commitment to delivering high-quality solutions that meet client and user needs. I am continuously learning and staying up-to-date with the latest technologies to ensure my work remains innovative and forward-thinking.
  </p>
</div>


                        
                        <a className="btn bg-red-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4" href="">Learn More</a>
                    {/* </div>
                </div> */}
            </div>
        </div>
    );
};

const SkillBar = ({ skill, percentage }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between">
                <p>{skill}</p>
                <p>{percentage}%</p>
            </div>
            <div className="progress bg-gray-200 rounded h-2">
                <div className={`progress-bar bg-blue-500 h-full rounded`} style={{ width: `${percentage}%` }} role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
};

export default About;
