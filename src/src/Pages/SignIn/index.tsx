import { useState, useContext } from "react";
import { UserContext } from "../../Contexts/userContext.tsx";
import { ContainerCenter } from "./style";

import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function SignIn() {
  const navigate = useNavigate();
  const { setIsAuthenticated, users, setLoggedUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const userExists = users.find((user) => user.email === email && user.password === password);
    if (userExists) {
      setIsAuthenticated(true);
      setLoggedUser(userExists);
      navigate(`/`);
    
    } else if (email === "" || password === "") {
      setMessage("Todos os campos são obrigatórios!");
    
    } else {
        setMessage("E-mail ou senha invalidos!");
    }
  };

  return (
    <>
      <Header />
      <ContainerCenter>
        <div className="login">
          <form>
            <h1>Entrar</h1>
            <input
              type="text"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span>{message}</span>

            <button type="submit" onClick={(e) => handleLogin(e)}>
              Acessar
            </button>
          </form>

          <Link to="/signup">Se ainda não é cadastrado, clique aqui</Link>
        </div>
      </ContainerCenter>
      <Footer />
    </>
  );
}
