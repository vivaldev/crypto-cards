import React from "react";

import "../../styles/CoinCard.css";
import { CryptoDataTypes } from "../../types";

interface VolumeProps {
  cryptoData: CryptoDataTypes;
}

const Volume: React.FC<VolumeProps> = ({ cryptoData }) => {
  return (
    <div className="data-wrapper">
      <p className="value">24h Volume:</p>
      <span className="price-value">
        {cryptoData.market_data.total_volume.usd.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </div>
  );
};

export default Volume;
