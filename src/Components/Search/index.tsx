import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AreaContainerSearch } from "./style";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSearch = () => {
    if (value !== "") {
      navigate(`/search/${value}`);
    }
  };

  return (
    <AreaContainerSearch>
      <input
        type="search"
        value={value}
        placeholder="Smartphones..."
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => handleSearch()}>
        <IoSearchSharp size={30} />
      </button>
    </AreaContainerSearch>
  );
};

export default Search;
