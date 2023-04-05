import React from "react";
import "../../styles/CoinCard.css";

interface HighLowProps {
  cryptoData: CryptoDataTypes;
}

const HighLow: React.FC<HighLowProps> = ({ cryptoData }) => {
  return (
    <>
      <div className="data-wrapper">
        <p className="value">24h High:</p>
        <span className="price-value">
          {cryptoData.market_data.high_24h.usd.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      <div className="data-wrapper">
        <p className="value">24h Low:</p>
        <span className="price-value">
          {cryptoData.market_data.low_24h.usd.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
    </>
  );
};

export default HighLow;
