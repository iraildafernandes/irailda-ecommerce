import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ContainerCart } from "./style.ts";
import { IProductInfo } from "../../types/product.ts";
import { AiOutlinePlus } from "react-icons/ai";
import { GrFormSubtract, GrClose } from "react-icons/gr";
import currencyFormatter from "../../utils/currencyFormatter.ts";

import api from "../../services/api.tsx";

const Cart: React.FC = () => {
  const [allProducts, setAllProducts] = useState([]);

  const smartphones: IProductInfo[] = allProducts.filter(
    (item: IProductInfo) => item.category === "smartphones"
  );

  const laptops: IProductInfo[] = allProducts.filter(
    (item: IProductInfo) => item.category === "laptops"
  );
  const productsTech = smartphones.concat(laptops);

  useEffect(() => {
    async function getProducts() {
      try {
        const responseGetProducts = await api.get("/products");
        const data = responseGetProducts.data.products;
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ContainerCart>
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
            {productsTech.map((item, index) => (
              <tr key={item.id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td className="actionArea">
                  <button><GrFormSubtract size={16} /></button>
                  <span>10</span>
                  <button><AiOutlinePlus size={16} /></button>
                </td>
                <td>{currencyFormatter.format(item.price)}</td>
                <td><button><GrClose size={16} /></button></td>
            </tr>
            ))}
          </tbody>
        </table>

        <div className="areaTotal">
          <h2>Resumo</h2>
          <p>Total: R$ 10.000,00</p>
          <button>Finalizar Compra</button>
        </div>
      </ContainerCart>
      <Footer />
    </>
  );
}

export default Cart;
