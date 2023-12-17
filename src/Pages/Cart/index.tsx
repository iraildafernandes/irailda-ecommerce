import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ContainerCart } from "./style.ts";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract, GrClose } from "react-icons/gr";
import currencyFormatter from "../../utils/currencyFormatter.ts";
import { UserContext } from "../../Contexts/userContext.tsx";

const Cart: React.FC = () => {
  const navigate = useNavigate();

  const { cartItems, removeCartItems, isAuthenticated } =
    useContext(UserContext);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);

  function teste() {
    if (isAuthenticated) {
      alert("Compra finalizada com sucesso");
    } else {
      alert("Faça o login para prosseguir com a compra!");
      navigate(`/signin`);
    }
  }

  function applyCoupon() {
    if (couponCode === "DISCOUNT10") {
      setCouponCode(couponCode);
      setDiscountPercentage(0.1);
    } else {
      setCouponCode("");
      setDiscountPercentage(0);
      alert("Cupom Inválido!");
    }
  }

  function calculateTotal() {
    let total = 0;
    for (const item of cartItems) {
      total += item.price * (1 - discountPercentage);
    }
    return total;
  }

  return (
    <>
      <Header />
      <ContainerCart>
        {cartItems.length >= 1 ? (
          <>
            <table border={0}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Valor</th>
                  <th>Remover</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="infoProduct">
                        <img src={item.thumbnail} />
                        {item.title}
                      </div>
                    </td>
                    <td className="actionArea">
                      <button>
                        <GrFormSubtract size={16} />
                      </button>
                      <span>10</span>
                      <button>
                        <AiOutlinePlus size={16} />
                      </button>
                    </td>
                    <td>{currencyFormatter.format(item.price)}</td>
                    <td>
                      <button
                        onClick={() => removeCartItems(item)}
                        className="delete"
                      >
                        <GrClose size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="areaTotal">
              <h2>Resumo</h2>
              <p>
                <strong>Subtotal: </strong>
                {currencyFormatter.format(
                  calculateTotal() * (1 - discountPercentage)
                )}
              </p>

              {discountPercentage != 0 && (
                <p>
                  <strong>Desconto: </strong>
                  {"-"}
                  {currencyFormatter.format(
                    calculateTotal() * discountPercentage
                  )}
                </p>
              )}

              <p>
                <strong>Total:</strong>{" "}
                {currencyFormatter.format(calculateTotal())}
              </p>
              <input
                type="text"
                placeholder="Código do cupom"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <div className="buttonCart">
                <button onClick={applyCoupon}>Aplicar cupom</button>
                <button onClick={teste}>Finalizar Pedido</button>
              </div>
            </div>
          </>
        ) : (
          <h1>Seu carrinho está vazio!</h1>
        )}
      </ContainerCart>
      <Footer />
    </>
  );
};

export default Cart;
