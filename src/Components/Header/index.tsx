import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiBearSmileLine } from "react-icons/ri";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <nav>
        <Link to={"/"} className="logo">
          <RiBearSmileLine size={50} />
          Bear Store
        </Link>
        <ul>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/cadastro"}>
              <HiOutlineShoppingBag size={25} />
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
