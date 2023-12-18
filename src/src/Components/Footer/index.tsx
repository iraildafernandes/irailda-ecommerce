import { Link } from "react-router-dom";
import { FooterContainer } from "./style";
import { RiBearSmileLine } from "react-icons/ri";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="footerContent">
        <Link to={"/"} className="logo">
          <RiBearSmileLine size={50} />
          Bear Store
        </Link>

        <div className="address-area">
          <h3>Endereço</h3>
          <address>
            <span>Rua dos bons, nº 0 - Vila Boa / Campinas - SP</span>
            <span>
              Email:
              <a href="mailto:bees@bees.com">bearstore@bearstore.com</a>
            </span>
            <span>
              Central de atendimento:{" "}
              <a href="tel:0800 999 9999">0800 999 9999</a>
            </span>
          </address>
        </div>

        <div className="media-area">
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                <AiOutlineInstagram size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank">
                <AiOutlineFacebook size={25} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank">
                <AiOutlineLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
