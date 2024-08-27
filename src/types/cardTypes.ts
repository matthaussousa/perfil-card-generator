export interface CardType {
  choices: string[];
  answer: string;
  kind: CardKindType;
}

type CardKindType = "person" | "place" | "year";

export interface CardInputType {
  name: CardKindType;
  input: string;
}
