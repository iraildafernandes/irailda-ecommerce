import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Contexts/userContext.tsx";
import Header from "../../Components/Header/index.tsx";
import Produto from "../../Components/Produto/index.tsx";
import Footer from "../../Components/Footer/index.tsx";
import { ContainerSearch, CardList } from "./style.ts";

const Results: React.FC = () => {
  const { id } = useParams();
  const { allProducts } = useContext(UserContext);

  const searchResults = allProducts.filter(item => item.title.toLowerCase().includes(id));

  return (
    <>
      <Header />
      <ContainerSearch>
        <h1>Resultados da pesquisa</h1>
        <div className="sliderArea"></div>

        {searchResults.length === 0 ? (
          <h2>nenhum resultado encontrado para: "{id}"</h2>
        ) : (
          <CardList>
            {searchResults.map((item) => (
              <li key={item.id}>
                <Produto {...item} />
              </li>
            ))}
          </CardList>
        )}
      </ContainerSearch>
      <Footer />
    </>
  );
};

export default Results;
