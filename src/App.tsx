import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import SearchCrypto from "./components/SearchCrypto";
import CoinCard from "./components/CoinCard";

import { CryptoData } from "./types";

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [cryptoData, setCryptoData] = useState<CryptoData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = (result: string) => {
    setSearchResult(result.toLowerCase());
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${searchResult}?localization=true&tickers=false&market_data=true&community_data=true`
      );
      setCryptoData(res.data);
      setLoading(false);
    };
    if (searchResult !== "") {
      fetchCryptoData();
    }
  }, [searchResult]);

  console.log(cryptoData);

  return (
    <div className="App">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="container">
        <SearchCrypto handleSearch={handleSearch} />
        {searchResult !== "" && !loading && cryptoData && (
          <CoinCard cryptoData={cryptoData} />
        )}
      </div>
    </div>
  );
};

export default App;
