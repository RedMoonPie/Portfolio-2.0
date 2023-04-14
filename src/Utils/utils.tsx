export const randomNeonColor = () => {
  const neonColors = [
    "#F7EC36",
    "#25B3C6",
    "#EB00A1",
    "#EF3929",
    "#204EE8",
    "#00E700",
    "#FF7200",
    "#5F0FFF",
    "#C203D3",
    "#1904DA",
    "#34FE4F",
    "#D1FE49",
    "#FF1F4F",
    "#BE0357",
  ];
  const position = randomIntFromInterval(0, 7);
  return neonColors[position];
};
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
