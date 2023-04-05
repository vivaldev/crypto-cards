interface CheckboxesProps {
  highLow: boolean;
  volume: boolean;
  priceChange: boolean;
  setHighLow: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<boolean>>;
  setPriceChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Checkboxes: React.FC<CheckboxesProps> = ({
  highLow,
  volume,
  priceChange,
  setHighLow,
  setVolume,
  setPriceChange,
}) => {
  return (
    <div className="checkboxes">
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={highLow}
          onChange={() => setHighLow(!highLow)}
        />
        <label>24h High/Low</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={volume}
          onChange={() => setVolume(!volume)}
        />
        <label>24h Volume</label>
      </div>
      <div className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={priceChange}
          onChange={() => setPriceChange(!priceChange)}
        />
        <label>24h Price Change</label>
      </div>
    </div>
  );
};

export default Checkboxes;
