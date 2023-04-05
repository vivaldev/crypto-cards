import React from "react";
import { useState } from "react";

import "../styles/CoinCard.css";
import { CryptoDataTypes } from "../types";

import HighLow from "./data-components/HighLow";
import Volume from "./data-components/Volume";
import PriceChange from "./data-components/PriceChange";

interface CoinCardProps {
  cryptoData: CryptoDataTypes;

  highLow?: boolean;
  volume?: boolean;
  priceChange?: boolean;
  setHighLow?: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume?: React.Dispatch<React.SetStateAction<boolean>>;
  setPriceChange?: React.Dispatch<React.SetStateAction<boolean>>;
}
const CoinCard: React.FC<CoinCardProps> = ({
  cryptoData,
  highLow,
  volume,
  priceChange,
  setHighLow,
  setVolume,
  setPriceChange,
}) => {
  const colorClass =
    cryptoData.market_data.price_change_percentage_24h > 0 ? "green" : "red";
  console.log("color class: ", colorClass);

  return (
    <div className="CoinCard">
      <div className="card-content">
        <div className="card-header">
          <h4 className="coin-name">{cryptoData.name}</h4>
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

          {highLow && <HighLow cryptoData={cryptoData} />}
          {volume && <Volume cryptoData={cryptoData} />}
          {priceChange && <PriceChange cryptoData={cryptoData} />}
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
