export type CharacterLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface CharacterStatCard {
  key: string;
  hitPoints: { [level in CharacterLevel]: number};
}

export interface Character {
  key: string;
  level: CharacterLevel;
  hitPoints: number;
  initiative: number | null;
}
