import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = 5003;


// Get __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🍕", name: "Pizza" },
];



// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(join(__dirname, "public")));

let score = 0;
let currentEmoji = {};
let options = [];

const generateEmojiQuestion = () => {
  const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  let incorrectOptions = emojis.filter((e) => e.name !== correctEmoji.name);

  // Shuffling the incorrect options
  incorrectOptions = incorrectOptions
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);


  // Combining correct and incorrect options and shuffling them
  options = [correctEmoji, ...incorrectOptions].sort(() => 0.5 - Math.random());
  currentEmoji = correctEmoji;
};


app.get("/api/question", (req, res) => {
  generateEmojiQuestion();
  res.json({
    emoji: currentEmoji.emoji,
    options: options.map((option) => ({ name: option.name })),
  });
});

app.post("/api/guess", (req, res) => {
  const { guess } = req.body;
  const correct = guess === currentEmoji.name;
  if (correct) {
    score++;
  }
  res.json({ correct, score });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
