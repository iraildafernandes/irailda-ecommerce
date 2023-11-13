import { useContext } from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { RiBearSmileLine } from "react-icons/ri";

import { UserContext } from "../../Contexts/userContext";

const Header: React.FC = () => {
  const { count } = useContext(UserContext);

  return (
    <HeaderContainer>
      <nav className="headerContent">
        <Link to={"/"} className="logo">
          <RiBearSmileLine size={50} />
          Bear Store
        </Link>
        <ul>
          <li>
            <Link to={"/signin"}>Login</Link>
          </li>
          <li className="area-qty">
            <Link to={"/cart"}>
              <HiOutlineShoppingBag size={50} />
              {!!count && (
                <div className="qty">
                  <span>{count}</span>
                </div>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
