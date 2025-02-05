import express from 'express';
import cors from 'cors';
import OpenAI from "openai";

const openai = new OpenAI();
const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:1234', 'http://192.168.0.110:1234'],  // Your client's URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/get-move', async (req, res) => {
  const fen = req.body.fen;
  console.log(`getting move given fen: ${fen}`)


  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: `You are an excellent chess player.  You will be playing as the black player and will be given a current board state and asked to make a move.  Consider the curren tboard state before making your move and include an explanation of the thought process and reasoning behind the move then the from and to locations.  For example

Given the board is:
rnbqkbnr/pppppppp/8/8/8/4P3/PPPP1PPP/RNBQKBNR b - - 0 1

Do not include any backticks or extra info in the response outside of the JSON object (it will be parsed with JSON.parse)

You should respond in JSON with something like:
{
    "explanation": "The move will not put any high value pieces at risk that aren't currently protected and gives the piece moved more potential targets of opportunity.  Moving knight in front of pawns",
    "from": "b8"
    "to": "a6"
}` },
  { role: "user", content: `Given the board is:
${fen}`}
  ],
    model: "o1-preview",
    // response_format: { "type": "json_object" }
  });

  res.json(completion.choices[0])
  
  console.log(completion.choices[0]);
  // Call OpenAI API with the FEN and parse the response
  // Return the move to the frontend
});
