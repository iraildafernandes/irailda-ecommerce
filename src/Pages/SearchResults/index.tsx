import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/index.tsx";
import Produto from "../../Components/Produto/index.tsx";
import Footer from "../../Components/Footer/index.tsx";
import { ContainerHome, CardList } from "./style.ts";
import { IProductInfo } from "../../types/product.ts";
import { UserContext } from "../../Contexts/userContext.tsx";

const Results: React.FC = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const { allProducts } = useContext(UserContext);

  useEffect(() => {

    async function teste(){
      const d = await allProducts.filter((itemSearch: IProductInfo) => itemSearch.title.toLowerCase().includes(id))

      console.log(d)
    }
    // console.log(allProducts)
    // const filteredProducts = allProducts.filter((item: IProductInfo) => item.title.toLowerCase().includes(id));
    // console.log(filteredProducts)


    teste()

  }, [])
  
  // console.log(filteredProducts);
  
  // setSearchResults(filteredProducts);
        const a = [
          {name: 'diego', lastname: ''},
          {name: 'Diego', lastname: ''},
          {name: 'di', lastname: ''},
          {name: 'dinha', lastname: ''},
          {name: 'DInha', lastname: ''},
        ];

        const teste = a.filter(item => item.name.toLowerCase().includes(id))
        console.log(teste)        

   return (
    <>
      <Header />
      <ContainerHome>
        <div className="sliderArea">
        </div>

        {allProducts.length === 0 ? (
        // {searchResults.length === 0 ? (
          <h2>Nenhum produto encontrado</h2>
        ) : (
        <CardList>
          {/* {searchResults.map((item) => (
            <li key={item.id}>
              <Produto {...item} />
            </li>
          ))} */}

          {allProducts.filter((itemSearch: IProductInfo) => itemSearch.title.toLowerCase().includes(`${id}`))
            .map((item: IProductInfo) => (
              <div key={item.id}>
              <img src={item.images[0]} height={200} alt="" />
              <h1>{item.title}</h1>
            </div>
            ))} 
        </CardList>

        )}

      </ContainerHome>
      <Footer />
    </>
  );
};

export default Results;
