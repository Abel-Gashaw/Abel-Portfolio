import React from "react";

const ExperienceItem = ({ date, title, company, description, isLeft }) => (
  <div
    className={`flex w-full ${
      isLeft ? "flex-row-reverse" : ""
    } items-center mb-12`}
  >
    <div className={`w-5/12 ${isLeft ? "text-left pr-8" : "pl-8"}`}>
      <div
        className={`bg-white p-6 rounded-lg shadow-md relative ${
          isLeft ? "mr-4" : "ml-4"
        }`}
      >
        <div
          className={`absolute top-1/2 -mt-2 w-4 h-4 rotate-45 bg-white ${
            isLeft ? "-right-2" : "-left-2"
          }`}
        ></div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <h4 className="text-gray-600 mb-2 font-bold">{company}</h4>
        <p
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: description }} // Render HTML for line breaks
        />
      </div>
    </div>
    <div className="w-2/12 flex justify-center relative">
      <div className="bg-red-500 rounded-full h-5 w-5 border-4 border-white z-10"></div>
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 ${
          isLeft ? "right-full mr-4" : "left-full ml-4"
        } whitespace-nowrap text-red-500 font-semibold`}
      >
        {date}
      </div>
    </div>
    <div className="w-5/12"></div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      date: "JUN 2023 - NOW",
      title: "Website Developer",
      company: "Shemu Group, Addis Ababa, Ethiopia",

      description: `
      As a Website Developer at Shemu Group, I am part of a dynamic team dedicated to creating and maintaining high-quality websites, including projects to Niber Foundation and Afri General Trading.<br />
      My role encompasses the full development lifecycle, from initial design and coding to implementation and ongoing support.<br />
      I have also contributed to the successful deployment and support on Kas ERP system and Green Tech Africa websites.<br /><br />
  
      <strong>Key Responsibilities:</strong><br />
      - Collaborated with a team of developers, designers, and project managers to develop user-friendly and visually appealing websites that meet client specifications.<br />
      - Participated in the design and development of responsive web applications using modern technologies and best practices.<br />
      - Engaged in the implementation and support of ERP systems, ensuring seamless integration with existing platforms and user training.<br />
      - Conducted thorough testing and debugging of applications to ensure functionality, performance, and security.<br />
      - Provided ongoing technical support and maintenance for existing websites, ensuring they remain up-to-date with the latest features and security standards.<br />
      - Worked closely with clients to gather requirements, provide updates, and implement changes based on feedback.<br /><br />
  
      <strong>Key Achievements:</strong><br />
      - Successfully launched websites for Niber Foundation and Afri General Trading, enhancing their online presence and user engagement.<br />
      - Improved website performance and user experience through continuous optimization and responsive design techniques.<br />
      - Developed custom modules and features for Kas ERP, enhancing its functionality and user satisfaction.<br /><br />
  
      <strong>Technologies Used:</strong><br />
      - Front-end: HTML, CSS, JavaScript, React<br />
      - Back-end: PHP, MySQL<br />
      - Tools: GitHub, Visual Studio Code, ERP Software
    `,
    },
    {
      date: "OCT 2022 - APR 2023",
      title: "Network Installer",
      company: "Tech Plus Solution, Addis Ababa, Ethiopia",
      description:
        "Worked as a Network Installer responsible for setting up, configuring, and maintaining network infrastructure, including wiring, routers, switches, and related hardware for various clients. Provided end-to-end support for network installations, covering structured cabling, hardware configuration, and network security. Ensured that all installations adhered to industry standards, resulting in stable and high-performing networks that met clients' business requirements.",
    },
    {
      date: "NOV 2020 - JUN 2021",
      title: "Website Developer/Final Year Project",
      company: "Jigjiga University, Jigjiga, Ethiopia",
      description: `
        Developed a comprehensive car rental management system website named Addis Car Rental system, designed to streamline booking and renting processes, vehicle management, and user interactions.<br />
        The platform offers an intuitive interface for both customers and administrators, simplifying day-to-day operations and enhancing customer service.<br /><br />
       <strong>Technologies Used:</strong><br />
        - Front-end: HTML, CSS, JavaScript,<br />
        - Back-end: PHP<br />
        - Database: MySQL<br />
        - Tools: GitHub, Visual Studio Code
      `,
    },
    // Add more experiences as needed
  ];

  return (
    <div className="bg-white py-16" id="experience">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-500 font-semibold mb-2">MY RESUME</p>
          <h2 className="text-3xl font-bold">Working Experience</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-500"></div>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
