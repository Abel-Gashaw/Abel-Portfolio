import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faFacebookF,
  faGithub,
  faTelegram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer py-8 bg-red-500 text-white" id="footer">
      <div className="container mx-auto">
        <div className="footer-info text-center">
          <h2 className="text-3xl font-semibold">Abel Gashaw</h2>
          <h3 className="text-xl mt-2">Addis Ababa, Ethiopia</h3>
          <div className="footer-menu mt-4">
            <p>+251933559460</p>
            <p>abelgashaw700@gmail.com</p>
          </div>
          <div className="footer-social mt-4 space-x-4 text-3xl">
            <a
              href="https://wa.me/+251933559460"
              className="text-green-500 hover:text-white"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              href="https://www.facebook.com/abel.gashaw.77985?mibextid=ZbWKwL"
              className="text-blue-700 hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://github.com/Abel-Gashaw"
              className="text-black-600  hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://t.me/Curious3_7"
              className="text-blue-500  hover:text-white"
            >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BvzOCJZPDSEm9E9APyEtvSQ%3D%3D"
              className="text-blue-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400">
            <a href="#" className="text-white">
              {" "}
              &copy; Abel Gashaw, All Right Reserved{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
