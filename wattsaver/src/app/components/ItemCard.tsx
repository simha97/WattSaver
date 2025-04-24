import React from "react";
import Image from "next/image";

type ItemCardProps = {
  title: string;
  kWh: number;
  description: string;
  price: string;
};

const ItemCard = ({ title, kWh, description, price }: ItemCardProps) => {
  // Check if the price is valid (i.e., a valid number)
  const numericPrice = parseFloat(price);

  // Handle invalid price (N/A or NaN)
  const itemPrice =
    numericPrice && !isNaN(numericPrice)
      ? (kWh * numericPrice).toFixed(2)
      : "N/A";

  return (
    <div className="flex items-center gap-4 p-6 bg-white border border-amber-300 rounded-xl shadow-md max-w-md">
      <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden bg-amber-100 flex items-center justify-center">
        <Image
          src="/tvätt.png"
          alt={title}
          width={48}
          height={48}
          className="object-contain rounded-full bg-amber-100"
        />
      </div>

      <div className="flex flex-col">
        <p className="text-sm text-gray-500">{title}</p>
        <h1 className="text-lg font-semibold text-amber-700">{itemPrice} kr</h1>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
