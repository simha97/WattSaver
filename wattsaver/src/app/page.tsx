"use client";
import { useEffect, useState } from "react";
import AreaForm from "./components/AreaForm";
import DateForm from "./components/DateForm";
import TimeForm from "./components/TimeForm";
import { getDefaultSettings, items } from "./constants";
import PriceChart from "./components/PriceChart";
import ItemCard from "./components/ItemCard";

type PriceData = {
  SEK_per_kWh: number;
};

export default function Home() {
  const [settings, setSettings] = useState(getDefaultSettings);
  const [data, setData] = useState<PriceData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/prices?date=${settings.date}&area=${settings.area}`
        );
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error("Failed to fetch electricity data:", err);
      }
    };
    fetchData();
  }, [settings.date, settings.area]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const price =
    data[parseInt(settings.time, 10)]?.SEK_per_kWh.toFixed(2) ?? "N/A";
  return (
    <div className="mx-4">
      <form>
        <AreaForm settings={settings} handleChange={handleChange} />
        <DateForm settings={settings} handleChange={handleChange} />
        <TimeForm settings={settings} handleChange={handleChange} />
      </form>

      <div className="flex justify-center gap-5 bg-white p-7 border-5 text-2xl border-amber-300 rounded-4xl my-6 mx-auto md:w-1/2 ">
        <h1>Priset är: </h1>
        <h1 className="font-bold">{price} kr/kWh</h1>
      </div>

      <PriceChart data={data} />

      {items.map((item, index) => (
        <ItemCard
          key={index}
          title={item.title}
          kWh={item.kWh}
          description={item.description}
          price={price}
        />
      ))}
    </div>
  );
}
