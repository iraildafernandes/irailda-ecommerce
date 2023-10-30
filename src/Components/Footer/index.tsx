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
      <Link to={"/"} className="logo">
        <RiBearSmileLine size={50} />
        Bear Store
      </Link>

      <div className="address-area">
        <address>
          <h3>Endereço</h3>
          <span>Rua dos bons, nº 0 - Vila Boa / Campinas - São Paulo</span>
          <span>
            Email:
            <a href="mailto:bees@bees.com">bearstore@bearstore.com</a>
          </span>
        </address>
        <span>Ou ligue na central de atendimento: 0800 999 9999</span>
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
    </FooterContainer>
  );
};

export default Footer;
