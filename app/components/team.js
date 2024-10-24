import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Aradom Leake",
      role: "Web Developer",
      imgSrc: "/images/aradom.jpg",
      description:
        "Aradom leake is a web developer worked in shemu Group of Companies",
      socials: [
        { id: 1, platform: "twitter", link: "", iconClass: "fab fa-twitter" },
        {
          id: 2,
          platform: "facebook",
          link: "",
          iconClass: "fab fa-facebook-f",
        },
        {
          id: 3,
          platform: "linkedin",
          link: "",
          iconClass: "fab fa-linkedin-in",
        },
        {
          id: 4,
          platform: "instagram",
          link: "",
          iconClass: "fab fa-instagram",
        },
      ],
    },
    {
      id: 2,
      name: "Tsegay Berhanu",
      role: "Web Developer",
      imgSrc: "",
      description:
        "Tsegay Berhanu is a web developer worked in shemu Group of Companies",
      socials: [
        { id: 1, platform: "twitter", link: "", iconClass: "fab fa-twitter" },
        {
          id: 2,
          platform: "facebook",
          link: "",
          iconClass: "fab fa-facebook-f",
        },
        {
          id: 3,
          platform: "linkedin",
          link: "",
          iconClass: "fab fa-linkedin-in",
        },
        {
          id: 4,
          platform: "instagram",
          link: "",
          iconClass: "fab fa-instagram",
        },
      ],
    },
    {
      id: 3,
      name: "Reagan Daniel",
      role: "Web Developer",
      imgSrc: "",
      description: "",
      socials: [
        { id: 1, platform: "twitter", link: "", iconClass: "fab fa-twitter" },
        {
          id: 2,
          platform: "facebook",
          link: "",
          iconClass: "fab fa-facebook-f",
        },
        {
          id: 3,
          platform: "linkedin",
          link: "",
          iconClass: "fab fa-linkedin-in",
        },
        {
          id: 4,
          platform: "instagram",
          link: "",
          iconClass: "fab fa-instagram",
        },
      ],
    },
  ];

  return (
    <div className="team py-16" id="team">
      <div className="container mx-auto">
        <div className="section-header text-center mb-10">
          <p className="text-gray-500 text-lg">My Team</p>
          <h2 className="text-3xl font-bold">Expert Team Members</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-item bg-white rounded-lg shadow-lg p-6"
            >
              <div className="team-img mb-4">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="team-text">
                <h2 className="text-xl font-bold">{member.name}</h2>
                <h4 className="text-gray-500 mb-2">{member.role}</h4>
                <p className="mb-4">{member.description}</p>
                <div className="team-social flex space-x-4">
                  {member.socials.map((social) => (
                    <a
                      key={social.id}
                      className="text-xl text-blue-500"
                      href={social.link}
                    >
                      <i className={social.iconClass}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
