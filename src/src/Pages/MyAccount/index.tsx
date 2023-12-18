import { useContext } from "react";
import { ContainerCenter } from "./style.ts";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/index.tsx";
import Footer from "../../Components/Footer/index.tsx";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../../Contexts/userContext.tsx";

const MyAccount: React.FC = () => {
  const { loggedUser } = useContext(UserContext);

  return (
    <>
      <Header />
      <ContainerCenter>
        <div className="signup">
          <form autoComplete="off">
            <Link to="/">
              <FaArrowLeft />
              Voltar
            </Link>
            <h1>Minha Conta</h1>

            <div className="input-area">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  name="name"
                  value={loggedUser.name}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="email@email.com"
                  name="email"
                  value={loggedUser.email}
                  readOnly
                />

                <input
                  type="tel"
                  placeholder="Digite o seu numero de telefone"
                  name="phone"
                  value={loggedUser.phone}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="CEP"
                  name="zipCode"
                  value={loggedUser.zipcode}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Logradouro"
                  name="street"
                  value={loggedUser.street}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Número"
                  name="number"
                  value={loggedUser.number}
                  readOnly
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Complemento"
                  name="complement"
                  value={loggedUser.complement}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Bairro"
                  name="neighborhood"
                  value={loggedUser.neighborhood}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  value={loggedUser.city}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Estado"
                  name="state"
                  value={loggedUser.state}
                  readOnly
                />

                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={loggedUser.password}
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
      </ContainerCenter>
      <Footer />
    </>
  );
};

export default MyAccount;
