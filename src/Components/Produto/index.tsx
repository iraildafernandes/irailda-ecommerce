import React, { useContext } from "react";
import { ContainerProduct } from "./style";
import { Link } from "react-router-dom";
import currencyFormatter from "../../utils/currencyFormatter";
import { UserContext } from "../../Contexts/userContext";

import { propsProduct } from "../../types/product";

const Produto: React.FC<propsProduct> = ({ id, title, price, thumbnail }) => {
  const { addCartItems } = useContext(UserContext);
  const currencyFormated = currencyFormatter.format(price);

  function addCart() {
    const product: propsProduct = {
      id: id,
      title: title,
      price: price,
      thumbnail: thumbnail,
    };

    addCartItems(product);
  }

  return (
    <ContainerProduct>
      <Link to={`/product-details/${id}`}>
        <img src={thumbnail} width={150} height={150} alt="" />
      </Link>
      <div className="areaInfo">
        <span>{title}</span>
        <span>{currencyFormated}</span>
        <button onClick={addCart}>Adicionar ao carrinho</button>
      </div>
    </ContainerProduct>
  );
};

export default Produto;
