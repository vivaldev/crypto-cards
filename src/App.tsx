import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import SearchCrypto from "./components/SearchCrypto";
import CoinCard from "./components/CoinCard";
import Checkboxes from "./components/Checkboxes";

import { CryptoDataTypes } from "./types";

const App: React.FC = () => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [cryptoData, setCryptoData] = useState<CryptoDataTypes | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [highLow, setHighLow] = useState<boolean>(false);
  const [volume, setVolume] = useState<boolean>(false);
  const [priceChange, setPriceChange] = useState<boolean>(false);

  const handleSearch = (result: string) => {
    setSearchResult(result.toLowerCase());
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const res = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${searchResult}?localization=true&tickers=false&market_data=true&community_data=true`
        );
        if (res.data.length === 0) {
          setError("No results found");
        } else {
          setCryptoData(res.data);
        }
      } catch (error) {
        setError(
          "No crypto data found. Please check your spelling and try again"
        );
      }
      setLoading(false);
    };

    if (searchResult !== "") {
      fetchCryptoData();
      setError("");
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
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="card-checkboxes-wrapper">
          {cryptoData && (
            <CoinCard
              cryptoData={cryptoData}
              highLow={highLow}
              volume={volume}
              priceChange={priceChange}
              setHighLow={setHighLow}
              setVolume={setVolume}
              setPriceChange={setPriceChange}
            />
          )}

          <Checkboxes
            highLow={highLow}
            volume={volume}
            priceChange={priceChange}
            setHighLow={setHighLow}
            setVolume={setVolume}
            setPriceChange={setPriceChange}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
