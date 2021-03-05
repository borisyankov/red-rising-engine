type AutomaLocation = 'Jupiter' | 'Mars' | 'Luna' | 'The Institute' | 'A' | 'B' | 'C' | 'D';

type AutomaCard = {
  id: number;
  deploy: AutomaLocation;
  gain: AutomaLocation;
  tiebreaker: 'left' | 'right';
  extra: 'none' | 'bonus' | 'banish';
};

const automaCards: AutomaCard[] = [
  {
    id: 1,
    deploy: 'Mars',
    gain: 'A',
    tiebreaker: 'left',
    extra: 'bonus',
  },
  {
    id: 2,
    deploy: 'Jupiter',
    gain: 'A',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 3,
    deploy: 'A',
    gain: 'A',
    tiebreaker: 'left',
    extra: 'banish',
  },
  {
    id: 4,
    deploy: 'Luna',
    gain: 'A',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 5,
    deploy: 'B',
    gain: 'Luna',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 6,
    deploy: 'B',
    gain: 'Luna',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 7,
    deploy: 'Jupiter',
    gain: 'B',
    tiebreaker: 'left',
    extra: 'bonus',
  },
  {
    id: 8,
    deploy: 'Luna',
    gain: 'B',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 9,
    deploy: 'C',
    gain: 'B',
    tiebreaker: 'left',
    extra: 'banish',
  },
  {
    id: 10,
    deploy: 'B',
    gain: 'B',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 11,
    deploy: 'The Institute',
    gain: 'C',
    tiebreaker: 'left',
    extra: 'bonus',
  },
  {
    id: 12,
    deploy: 'A',
    gain: 'Luna',
    tiebreaker: 'right',
    extra: 'banish',
  },
  {
    id: 13,
    deploy: 'Mars',
    gain: 'D',
    tiebreaker: 'left',
    extra: 'bonus',
  },
  {
    id: 14,
    deploy: 'A',
    gain: 'Mars',
    tiebreaker: 'right',
    extra: 'none',
  },
  {
    id: 15,
    deploy: 'A',
    gain: 'Jupiter',
    tiebreaker: 'left',
    extra: 'none',
  },
  {
    id: 16,
    deploy: 'B',
    gain: 'The Institute',
    tiebreaker: 'right',
    extra: 'none',
  },
  {
    id: 17,
    deploy: 'C',
    gain: 'Mars',
    tiebreaker: 'left',
    extra: 'bonus',
  },
  {
    id: 18,
    deploy: 'A',
    gain: 'C',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 19,
    deploy: 'B',
    gain: 'Jupiter',
    tiebreaker: 'left',
    extra: 'bonus',
  },
  {
    id: 20,
    deploy: 'D',
    gain: 'The Institute',
    tiebreaker: 'right',
    extra: 'bonus',
  },
  {
    id: 21,
    deploy: 'C',
    gain: 'D',
    tiebreaker: 'left',
    extra: 'none',
  },
  {
    id: 22,
    deploy: 'D',
    gain: 'C',
    tiebreaker: 'right',
    extra: 'none',
  },
];
