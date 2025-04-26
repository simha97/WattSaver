import React from "react";

interface PriceBoxProps {
  price: string;
}

const PriceBox: React.FC<PriceBoxProps> = ({ price }) => {
  return (
    <section
      className="flex justify-center items-center gap-5 bg-white p-7 border-5 text-2xl border-amber-300 rounded-4xl my-6 mx-auto"
      aria-label="El priset vid den valda tiden"
      aria-live="polite"
    >
      <span>Priset är: </span>
      <span className="font-bold">{price} kr/kWh</span>
    </section>
  );
};

export default PriceBox;
