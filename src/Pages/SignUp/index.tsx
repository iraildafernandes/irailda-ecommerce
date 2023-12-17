import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerCenter } from "./style";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [message, setMessage] = useState("");

  const handleCadastro = () => {
    if (email === "" || password === "" || privacyPolicy === false) {
      setMessage("Todos os campos são obrigatórios!");
    } else {
      console.log("Nome:", name);
      console.log("Email:", email);
      console.log("Telefone:", phone);
      console.log("CEP:", zipCode);
      console.log("Rua:", street);
      console.log("Número:", number);
      console.log("Complemento:", complement);
      console.log("Bairro:", neighborhood);
      console.log("Cidade:", city);
      console.log("Estado:", state);
      console.log("Senha:", password);
      console.log("Confirmação de Senha:", confirmPassword);
      console.log("Política de Privacidade:", privacyPolicy);
    }
  };

  return (
    <>
      <Header />
      <ContainerCenter>
        <div className="signup">
          <form autoComplete="off">
            <h1>Crie a sua conta</h1>

            <div className="input-area">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="email@email.com"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="tel"
                  placeholder="Digite o seu numero de telefone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="CEP"
                  name="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Logradouro"
                  name="street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Número"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Complemento"
                  name="complement"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Bairro"
                  name="neighborhood"
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="Estado"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Confirme a senha"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <span>{message}</span>

            <div className="action-area">
              <label>
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={privacyPolicy}
                  onChange={() => setPrivacyPolicy(!privacyPolicy)}
                />
                Concordo com a política de privacidade
              </label>

              <button type="button" onClick={(e) => handleCadastro(e)}>
                Cadastrar
              </button>
            </div>
          </form>

          <Link to="/signIn">Se você já tem cadastro, faça login</Link>
        </div>
      </ContainerCenter>
      <Footer />
    </>
  );
}
