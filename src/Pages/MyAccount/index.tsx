import { useContext } from "react";
import { ContainerCenter } from "./style.ts";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/index.tsx";
import Footer from "../../Components/Footer/index.tsx";
import { FaArrowLeft } from "react-icons/fa6";
import { UserContext } from "../../Contexts/userContext.tsx";

const MyAccount: React.FC = () => {
  const { user } = useContext(UserContext);

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
                  value={user.name}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="email@email.com"
                  name="email"
                  value={user.email}
                  readOnly
                />

                <input
                  type="tel"
                  placeholder="Digite o seu numero de telefone"
                  name="phone"
                  value={user.phone}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="CEP"
                  name="zipCode"
                  value={user.zipcode}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Logradouro"
                  name="street"
                  value={user.street}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Número"
                  name="number"
                  value={user.number}
                  readOnly
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Complemento"
                  name="complement"
                  value={user.complement}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Bairro"
                  name="neighborhood"
                  value={user.neighborhood}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  value={user.city}
                  readOnly
                />

                <input
                  type="text"
                  placeholder="Estado"
                  name="state"
                  value={user.state}
                  readOnly
                />

                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={user.password}
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
