import { ChatCompletion } from "openai/resources/index.mjs";
import { CardInputType, CardType } from "../types/cardTypes";

export default class CardAdapter {
  getCard(response: ChatCompletion, input: CardInputType): CardType | null {
    if (response.choices[0].message.content) {
      const card = response.choices[0].message.content.split("\n");

      return {
        choices: card.slice(0, 20),
        answer: card[card.length - 1].replace("answer='", "").slice(0, -1),
        kind: input.name,
      };
    }

    return null;
  }
}
