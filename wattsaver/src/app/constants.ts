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
    area: "SE3",
    date: `${month}-${day}`,
    time: hour,
  };
};

export const items = [
  {
    title: "En dusch",
    description: "Dusch i 10 min = ~6 kWh",
    kWh: 6,
  },
  
  {
    title: "Koka vatten",
    description: "koka 1 liter vatten = ~0,12 kWh",
    kWh: 0.12,
  },

  {
    title: "Titta på tv",
    description: "Halvtimme = ~0,06 kWh",
    kWh: 0.06,
  },
  {
    title: "Tvättmaskin",
    description: "Genomsnittlig = ~0,8 kWh",
    kWh: 0.8,
  },
  {
    title: "Dammsug",
    description: "Dammsugare i 10 min = ~0,33 kWh",
    kWh: 0.33,
  },
  {
    title: "Hårtork",
    description: "Hårtork i 10 min = ~0,33 kWh",
    kWh: 0.33,
  },
  {
  title: "Ugn",
  description: "Ugn i 30 min vid 200°C = ~0,5 kWh",
  kWh: 0.5,
  },
  {
  title: "Diskmaskin",
  description: "Ett standardprogram = ~1,0 kWh",
  kWh: 1.0,
  },
  {
  title: "Mikrovågsugn",
  description: "5 min på hög effekt = ~0,15 kWh",
  kWh: 0.15,
  },
  {
  title: "Strykjärn",
  description: "Stryka i 30 min = ~0,5 kWh",
  kWh: 0.5,
},


];
