import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/index.tsx";
import Produto from "../../Components/Produto/index.tsx";
import Footer from "../../Components/Footer/index.tsx";
import { ContainerHome, CardList } from "./style.ts";

const Results: React.FC = () => {
  const { id } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  return (
    <>
      <Header />
      <ContainerHome>
        <div className="sliderArea"></div>

        {searchResults.length === 0 ? (
          <h2>Nenhum produto encontrado</h2>
        ) : (
          <CardList>
            {searchResults.map((item) => (
              <li key={item.id}>
                <Produto {...item} />
              </li>
            ))}
          </CardList>
        )}
      </ContainerHome>
      <Footer />
    </>
  );
};

export default Results;
