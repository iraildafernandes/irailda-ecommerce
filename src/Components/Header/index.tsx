import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderContainer } from "./style";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUserCircle2 } from "react-icons/lu";
import { RiBearSmileLine } from "react-icons/ri";

import { UserContext } from "../../Contexts/userContext";
import Search from "../Search";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { count, isAuthenticated, setIsAuthenticated, user, setUser } =
    useContext(UserContext);

  function logout() {
    setIsAuthenticated(false);
    setUser({});
    navigate(`/`);
  }

  return (
    <HeaderContainer>
      <nav className="headerContent">
        <Link to={"/"} className="logo">
          <RiBearSmileLine size={50} />
          Bear Store
        </Link>
        <Search />
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <span>
                  Bem-vindo(a), <strong>{user.name}</strong>
                </span>
              </li>
              <li>
                <Link to={"/account"}>
                  <LuUserCircle2 size={45} />
                </Link>
              </li>
              <li>
                <button onClick={logout}>Sair</button>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/signin"}>Login</Link>
            </li>
          )}
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
