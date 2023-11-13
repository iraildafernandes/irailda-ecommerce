import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Produto from "../../Components/Produto";
import Footer from "../../Components/Footer";
import { ContainerHome, CardList } from "./style.ts";
import { IProductInfo } from "../../types/product.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import api from "../../services/api.tsx";

const Home: React.FC = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <ContainerHome>
        <div className="sliderArea">
          {/* <Slider {...settings}>
            {smartphones.map((item) => (
              <div key={item.id}>
                <img src={item.images[0]} height={200} alt="" />
                <h1>{item.title}</h1>
              </div>
            ))}
          </Slider> */}
        </div>

        <CardList>
          {productsTech.map((item) => (
            <li key={item.id}>
              <Produto {...item} />
            </li>
          ))}
        </CardList>
      </ContainerHome>
      <Footer />
    </>
  );
};

export default Home;
