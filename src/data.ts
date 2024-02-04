type Coefficient = {
  homeWin: number;
  guestWin: number;
  draw: number;
};

export type TEvent = {
  id: string;
  homeTeam: string;
  guestTeam: string;
  date: Date;
  coefficients: Coefficient;
  isLive: boolean;
};

export const events: TEvent[] = [
  {
    id: "1",
    homeTeam: "Barcelona",
    guestTeam: "Liverpool",
    date: new Date("12.02.2024"),
    coefficients: {
      homeWin: 1.7,
      guestWin: 2.4,
      draw: 2.8,
    },
    isLive: false,
  },
  {
    id: "2",
    homeTeam: "Dinamo Minsk",
    guestTeam: "Dinamo Kiev",
    date: new Date(),
    coefficients: {
      homeWin: 1.3,
      guestWin: 0.5,
      draw: 2.1,
    },
    isLive: true,
  },
];
