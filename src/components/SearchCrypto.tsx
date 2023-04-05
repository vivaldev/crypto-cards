import React, { useState } from "react";
import "../styles/SearchCrypto.css";

interface SearchCryptoProps {
  handleSearch: (result: string) => void;
}

const SearchCrypto: React.FC<SearchCryptoProps> = ({ handleSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(search);
    // Initialize input value to ""
    setSearch("");
  };

  return (
    <div className="SearchCrypto">
      <form className="form-search" onSubmit={handleSubmit}>
        <label className="label-search" htmlFor="search">
          Search Coin:
        </label>
        <input
          className="input-search"
          name="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input className="input-submit" type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchCrypto;
