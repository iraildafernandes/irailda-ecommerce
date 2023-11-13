import { useContext } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ContainerCart } from "./style.ts";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract, GrClose } from "react-icons/gr";
import currencyFormatter from "../../utils/currencyFormatter.ts";
import { UserContext } from "../../Contexts/userContext.tsx";

const Cart: React.FC = () => {
  const { cartItems, removeCartItems } = useContext(UserContext);

  return (
    <>
      <Header />
      <ContainerCart>
        {cartItems.length >= 1 ? (
          <>
            <table border={1}>
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
                    <td>{item.title}</td>
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
                      <button onClick={() => removeCartItems(item)}>
                        <GrClose size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="areaTotal">
              <h2>Resumo</h2>
              <p>Total: R$ 10.000,00</p>
              <button>Finalizar Compra</button>
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
