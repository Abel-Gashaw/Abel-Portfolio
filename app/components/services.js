import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faLaptop,
  faLaptopCode,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Web Design",
    description:
      "I create modern, intuitive, and responsive website designs that enhance user experience and reflect brand identity. My approach focuses on visual aesthetics, layout, and usability to ensure websites are engaging and easy to navigate across all devices.",
    icon: faLaptop,
    delay: "0.0s",
  },
  {
    title: "Web Development",
    description:
      "I build dynamic and high-performance websites using both front-end and back-end technologies. My development process emphasizes functionality, security, and scalability, delivering solutions that meet client needs while ensuring efficient performance and seamless integration.",
    icon: faLaptopCode,
    delay: "0.2s",
  },
  {
    title: "System Implementation",
    description:
      "I implement custom software solutions that align with business processes, handling everything from system configuration to user training. I focus on ensuring systems are easy to use, reliable, and adaptable to future needs.",
    icon: faServer,
    delay: "0.4s",
  },
  {
    title: "Networking",
    description:
      "I specialize in setting up and maintaining networking systems, including rack installations, cabling, switch configuration, and security camera systems. I ensure secure, fast, and stable network connections while optimizing infrastructure for efficient data flow and security.",
    icon: faNetworkWired,
    delay: "0.6s",
  },
];

const Service = () => {
  return (
    <div className="service py-16" id="service">
      <div className="container mx-auto text-center">
        <div className="section-header mb-12">
          <p className="text-lg font-semibold">What I do</p>
          <h2 className="text-2xl font-bold">Awesome Quality Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item wow fadeInUp transition-transform transform hover:scale-105 hover:bg-red-500 p-6 rounded-lg  text-gray-800 hover:text-white`}
              data-wow-delay={service.delay}
            >
              <div className="service-icon text-6xl mb-4 text-red-500 hover:text-white">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <div className="service-text">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
