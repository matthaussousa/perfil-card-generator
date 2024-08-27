import { FastifyReply, FastifyRequest } from "fastify";
import CardProvider from "../providers/cardProvider";
import CardAdapter from "../adapters/cardAdapter";
import { CardInputType } from "../types/cardTypes";
import { PERSON_INPUT, PLACE_INPUT, YEAR_INPUT } from "../constants/prompts";

export default class CardController {
  private cardService: CardProvider;
  private cardAdapter: CardAdapter;

  constructor() {
    this.cardService = new CardProvider();
    this.cardAdapter = new CardAdapter();
  }

  getCardKindInput(randomNumber: number): CardInputType {
    switch (randomNumber) {
      case 0:
        return {
          name: "place",
          input: PLACE_INPUT,
        };
      case 2:
        return {
          name: "year",
          input: YEAR_INPUT,
        };
      default:
        return {
          name: "person",
          input: PERSON_INPUT,
        };
    }
  }

  async getCard(req: FastifyRequest, reply: FastifyReply) {
    try {
      const randomNumber = Math.floor(Math.random() * 3);
      const cardInput = this.getCardKindInput(randomNumber);

      const response = await this.cardService.getCard(cardInput);
      const card = this.cardAdapter.getCard(response, cardInput);

      return reply.status(201).send({ card });
    } catch (error: any) {
      return reply.status(400).send({ error: error.message });
    }
  }
}
