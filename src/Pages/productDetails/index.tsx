import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/userContext.tsx";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ContainerProduct } from "./style.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import api from "../../services/api.tsx";

function ProductDetails() {
  const { id } = useParams();
  const { addCartItems } = useContext(UserContext);
  const [productDetail, setProductDetail] = useState("");

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function getProduct() {
      try {
        const responseGetProducts = await api.get(`/products/${id}`);
        const data = responseGetProducts.data;
        setProductDetail(data);
      } catch (error) {
        console.log(error);
      }
    }

    getProduct();
  }, []);

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
    <>
      <Header />
      <ContainerProduct>
        <div className="img-area">
          <Slider {...settings}>
            {productDetail.images?.map((item: string) => (
              <div key={item.title}>
                <img src={item} alt={productDetail.title} />
              </div>
            ))}
          </Slider>
          <p>{productDetail.description}</p>
        </div>
        <div className="info-area">
          <span>{productDetail.title}</span>
          <span>{productDetail.price}</span>

          <button onClick={addCart}>Adicionar ao carrinho</button>

          <button>Buy Now</button>
        </div>
      </ContainerProduct>
      <Footer />
    </>
  );
}

export default ProductDetails;
