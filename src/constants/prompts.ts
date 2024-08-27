export const CARD_PROMPT = `
Act like a card board game when one player draw a card with 20 tips from something. then other players try to guess what are requesting tips.

Now lets create a card to the game. {{INPUT}}.  

Then create a list with 20 tips, curiosities, specific characteristics or facts about it. 

Tips must have numbered from 1 to 20 separated by new lines.

Each tip must have max 100 characters.

Hide the name from tips. 
          
Make shortly and easier to someone find who is it. 
          
Tell me whats is the specific answer as answer='answer'.

The Result must have only the tips and the answer.
          
All answers must be in brazilian portuguese.
`;

export const PLACE_INPUT = `pick a place in the world, that can be any nature creation, places made by man kind or fictional place`;
export const YEAR_INPUT = `pick a important year in the history`;
export const PERSON_INPUT = `pick a important person in the history, can be a fictional person or a real person`;
