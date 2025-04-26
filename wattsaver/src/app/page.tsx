"use client";
import { useEffect, useState } from "react";
import AreaForm from "./components/AreaForm";
import DateForm from "./components/DateForm";
import TimeForm from "./components/TimeForm";
import { getDefaultSettings, items } from "./constants";
import PriceChart from "./components/PriceChart";
import ItemCard from "./components/ItemCard";
import Header from "./components/header";
import PriceBox from "./components/PriceBox";

type PriceData = {
  SEK_per_kWh: number;
};

export default function Home() {
  const [settings, setSettings] = useState(getDefaultSettings);
  const [data, setData] = useState<PriceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `/api/prices?date=${settings.date}&area=${settings.area}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setData(data);
        setError(null);
      } catch (err) {
        console.error("Failed to fetch electricity data:", err);
        setError("Kunde inte hämta elpriser. Försök igen senare.");
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
    <>
      <header>
        <Header />
      </header>
      <main className="mx-4 md:m-10">
        <section className="md:flex md:justify-center md:gap-10">
          <form
            className="md:w-1/2"
            aria-label="Inställningar för område, datum och tid"
          >
            <AreaForm settings={settings} handleChange={handleChange} />
            <DateForm settings={settings} handleChange={handleChange} />
            <TimeForm settings={settings} handleChange={handleChange} />
          </form>

          {error ? (
            <p role="alert" className="text-red-600 text center">
              {error}
            </p>
          ) : (
            <section className="md:w-1/2">
              <PriceBox price={price} />

              <PriceChart data={data} />
            </section>
          )}
        </section>

        <section>
          <h2 className="text-center m-5 text-xl md:text-4xl">
            Med elpriset i den här timmet kostar...
          </h2>
          <div className="flex flex-col m-7 md:flex-row md:flex-wrap md:justify-center md:gap-5 md:m-6">
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
        </section>
      </main>
    </>
  );
}
