import { useId } from "react";

export default function InputBox({
  label,
  className = "a",
  currencyOptions,
  amount,
  onAmountChange,
  disableAmount = false,
  selectedCurrency,
  onCurrencyChange,
}) {
  const uniqueId = useId();
  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label htmlFor={uniqueId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input
            className={`outline-none w-full bg-transparent py-1.5 ${className}`}
            type="number"
            placeholder="Amount"
            id={uniqueId}
            value={amount}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
            disabled={disableAmount}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            value={selectedCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          >
            {currencyOptions.map((currency) => {
              return (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
