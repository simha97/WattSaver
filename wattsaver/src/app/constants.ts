export interface Area {
  name: string;
  code: string;
}

export const areas: Area[] = [
  { name: "Luleå / Norra Sverige", code: "SE1" },
  { name: "Sundsvall / Norra MellanSverige", code: "SE2" },
  { name: "Stockholm / Södra MellanSverige", code: "SE3" },
  { name: "Malmö / Södra Sverige", code: "SE4" },
];


export const getTodayAndTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const format = (date: Date) =>
    `${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")}`;

  return [
    { label: "Idag", date: format(today) },
    { label: "imorgon", date: format(tomorrow) },
  ];
};


export const getDefaultSettings = () => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hour = String(now.getHours()).padStart(2, "0");
  return {
    area: "SE1",
    date: `${month}-${day}`,
    time: hour,
  };
};

export const items = [
  {
    title: "En dusch",
    description: "10 min, 160 liter vatten = ~6 kWh",
    kWh: 6,
  },
  {
    title: "Ett bad",
    description: "200 liter vatten = ~7,5 kWh",
    kWh: 7.5,
  },
  {
    title: "Baka en pizza",
    description: "Ugn i 30 min = ~1,1 kWh",
    kWh: 1.1,
  },
  {
    title: "Koka 1 liter vatten",
    description: "Varmplatta i 4 min = ~0,12 kWh",
    kWh: 0.12,
  },
  {
    title: "En värmare dygnet runt",
    description: "1000W x 24 timmar = 24 kWh",
    kWh: 24,
  },
  {
    title: "Ladda elbilen",
    description: "Nissan Leaf 10–80% = ~45 kWh",
    kWh: 45,
  },
  {
    title: "Titta på tv i en timme",
    description: "Genomsnittlig = ~0,06 kWh",
    kWh: 0.06,
  },
  {
    title: "En tvättmaskin",
    description: "Genomsnittlig = ~0,8 kWh",
    kWh: 0.8,
  },
  {
    title: "Ladda mobilen",
    description: "Genomsnittlig = ~0,005 kWh",
    kWh: 0.005,
  },
  {
    title: "Kylskåp per dag",
    description: "Genomsnittlig = ~0,44 kWh",
    kWh: 0.44,
  },
  {
    title: "Dammsug i 10 min",
    description: "Dammsugare i 10 min = ~0,33 kWh",
    kWh: 0.33,
  },
  {
    title: "Hårtork i 10 min",
    description: "Hårtork i 10 min = ~0,33 kWh",
    kWh: 0.33,
  }
];
