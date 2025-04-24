// PriceChart.tsx
import React from "react";
import { Line } from "react-chartjs-2";
import { ScriptableContext } from "chart.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface PriceChartProps {
  data: { SEK_per_kWh: number }[];
}

const PriceChart: React.FC<PriceChartProps> = ({ data }) => {
  // x-axis
  const labels = Array.from(
    { length: 24 },
    (_, i) => `${String(i).padStart(2, "0")}:00`
  );
  //calculating the average the make the points larger than the average red
  const values = data.map((entry) => entry.SEK_per_kWh || 0);
  const average = values.reduce((sum, val) => sum + val, 0) / values.length;

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "El priset över dagen (SEK/kWh)",
        data: data.map((hour) => hour?.SEK_per_kWh || 0),
        borderColor: "rgb(217, 217, 217)", // Line color
        tension: 0.1, // Smoothness of the line
        pointRadius: 4,
        pointBackgroundColor: (ctx: ScriptableContext<"line">) => {
          const value = Number(ctx.raw); // Safely cast to number
          return value > average ? "red" : "green";
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-5xl px-4 mx-auto">
      <Line data={chartData} />
    </div>
  );
};

export default PriceChart;
