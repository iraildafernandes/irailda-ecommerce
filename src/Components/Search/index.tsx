import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerSearch } from "./style";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value !== "") {
      navigate(`/search/${value}}`);
    }
  };

  return (
    <ContainerSearch>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => handleSearch()}>
        <IoSearchSharp size={30} />
      </button>
    </ContainerSearch>
  );
};

export default Search;
