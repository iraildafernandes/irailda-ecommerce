import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Produto from "../../Components/Produto";
import Footer from "../../Components/Footer";
import { SliderArea, ContainerHome, CardList } from "./style.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import api from "../../services/api.tsx";

function Home() {
  const [allProducts, setAllProducts] = useState([]);

  const smartphones = allProducts.filter(
    (item) => item.category === "smartphones"
  );
  const laptops = allProducts.filter((item) => item.category === "laptops");
  const productsTech = smartphones.concat(laptops);

  useEffect(() => {
    async function getProducts() {
      try {
        const responseGetProducts = await api.get("/products");
        const data = responseGetProducts.data;
        setAllProducts(data.products);
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
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <Header />
      <ContainerHome>
        <SliderArea>
          <Slider {...settings}>
            {smartphones.map((item) => (
              <div>
                <img src={item.images[0]} height={200} alt="" />
                <h1>{item.title}</h1>
              </div>
            ))}
          </Slider>
        </SliderArea>

        <CardList>
          {productsTech.map((item) => (
            <li>
              <Produto {...item} />
            </li>
          ))}
        </CardList>
      </ContainerHome>
      <Footer />
    </>
  );
}

export default Home;
