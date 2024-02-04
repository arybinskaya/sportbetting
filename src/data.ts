export type Coefficient = { label: string; value: number };

type Coefficients = {
  home: Coefficient;
  guest: Coefficient;
  draw: Coefficient;
};

export type TEvent = {
  id: string;
  homeTeam: string;
  guestTeam: string;
  date: Date;
  coefficients: Coefficients;
  isLive: boolean;
};

export const events: TEvent[] = [
  {
    id: "1",
    homeTeam: "Barcelona",
    guestTeam: "Liverpool",
    date: new Date("02.12.2024"),
    coefficients: {
      home: { label: "Barcelona", value: 1.3 },
      guest: { label: "Liverpool", value: 2.8 },
      draw: { label: "Draw", value: 2.1 },
    },
    isLive: false,
  },
  {
    id: "2",
    homeTeam: "Dinamo Minsk",
    guestTeam: "Dinamo Kiev",
    date: new Date(),
    coefficients: {
      home: { label: "Dinamo Minsk", value: 1.3 },
      guest: { label: "Dinamo Kiev", value: 2.8 },
      draw: { label: "Draw", value: 2.1 },
    },
    isLive: true,
  },
  {
    id: "3",
    homeTeam: "Arsenal",
    guestTeam: "Chelsea",
    date: new Date(),
    coefficients: {
      home: { label: "Arsenal", value: 2.8 },
      guest: { label: "Chelsea", value: 1.7 },
      draw: { label: "Draw", value: 1.1 },
    },
    isLive: true,
  },
  {
    id: "4",
    homeTeam: "Manchester United",
    guestTeam: "Tottenham",
    date: new Date("02.15.2024"),
    coefficients: {
      home: { label: "Manchester United", value: 1.7 },
      guest: { label: "Tottenham", value: 2.4 },
      draw: { label: "Draw", value: 2.8 },
    },
    isLive: false,
  },
];
