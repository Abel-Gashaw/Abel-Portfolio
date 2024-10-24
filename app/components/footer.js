import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faGithub, faTelegram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
              <a href="#" className="text-green-500 hover:text-white">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#" className="text-blue-700 hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-black-600  hover:text-white">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="text-blue-500  hover:text-white">
                <FontAwesomeIcon icon={faTelegram}/>
              </a>
              <a href="#" className="text-blue-400 hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-400">
           <a href="#" className="text-white">  &copy; Abel Gashaw, All Right Reserved </a>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
