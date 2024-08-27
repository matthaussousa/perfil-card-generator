import { CARD_PROMPT } from "../constants/prompts";
import { openai } from "../lib/openai";
import { CardInputType } from "../types/cardTypes";

export default class CardProvider {
  async getCard(input: CardInputType) {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: CARD_PROMPT.replace("{{INPUT}}", input.input),
        },
      ],
      temperature: 1,
      max_tokens: 512,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return response;
  }
}
