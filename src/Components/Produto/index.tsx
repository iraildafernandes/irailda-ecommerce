import React from "react";
import { ContainerProduct } from "./style";
import { Link } from "react-router-dom";

type propsProduct = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const Produto: React.FC<propsProduct> = ({
  id,
  title,
  price,
  thumbnail,
}: propsProduct) => {
  return (
    <ContainerProduct>
      <Link to={`/product-details/${id}`}>
        <img src={thumbnail} width={150} height={150} alt="" />
      </Link>
      <div className="area-info">
        <span>{title}</span>
        <span>R$ {price}</span>
        <button>Add Cart</button>
      </div>
    </ContainerProduct>
  );
};

export default Produto;
