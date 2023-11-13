import { useState } from "react";
import { ContainerCenter } from "./style";

import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Todos os campos são obrigatórios!");
    } else {
      console.log("Email:", email);
      console.log("Senha:", password);
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
