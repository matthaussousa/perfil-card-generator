import fastify, { FastifyReply, FastifyRequest } from "fastify";
import CardController from "./controllers/cardController";

const app = fastify();

app.get("/card", async (request: FastifyRequest, reply: FastifyReply) => {
  return new CardController().getCard(request, reply);
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running on port 3333");
  });
