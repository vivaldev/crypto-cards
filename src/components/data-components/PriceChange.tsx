import React from "react";
import "../../styles/CoinCard.css";
import { CryptoDataTypes } from "../../types";

interface PriceChangeProps {
  cryptoData: CryptoDataTypes;
}

const PriceChange: React.FC<PriceChangeProps> = ({ cryptoData }) => {
  return (
    <div className="data-wrapper">
      <p className="value">24h Price Change:</p>
      <span className="price-value">
        {cryptoData.market_data.price_change_percentage_24h.toFixed(2)}%
      </span>
    </div>
  );
};

export default PriceChange;
