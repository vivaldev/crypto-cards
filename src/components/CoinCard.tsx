import React from "react";
import "../styles/CoinCard.css";
import { CryptoDataTypes } from "../types";

interface CoinCardProps {
  cryptoData: CryptoDataTypes;
}
const CoinCard: React.FC<CoinCardProps> = ({ cryptoData }) => {
  return (
    <div className="CoinCard">
      <div className="card-content">
        <div className="card-header">
          <h4>{cryptoData.name}</h4>
          <div className="symbol-wrapper">
            <img
              className="coin-image"
              src={cryptoData.image.small}
              alt={cryptoData.name}
            />
            <p className="symbol">{cryptoData.symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="card-body">
          <div className="data-wrapper">
            <p className="value">Current price:</p>
            <span className="price-value">
              {cryptoData.market_data.current_price.usd.toLocaleString(
                "en-US",
                {
                  style: "currency",
                  currency: "USD",
                }
              )}
            </span>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
