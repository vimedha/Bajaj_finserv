const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to BFHL API 🚀 Use /bfhl for POST requests");
});

app.post("/bfhl", (req, res) => {
  const data = req.body.data;

  const odd = [];
  const even = [];
  const alphabets = [];
  const special = [];

  data.forEach(item => {
    if (/^[0-9]+$/.test(item)) {
      if (parseInt(item) % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item.toUpperCase());
    } else {
      special.push(item);
    }
  });

  const sum = [...odd, ...even].reduce((acc, num) => acc + parseInt(num), 0);
  const concat_string = alphabets.slice(0, 2).reverse().join("");

  res.json({
    is_success: true,
    user_id: "vimedha_chaturvedi_02102003",
    email: "vimedha2@gmail.com",
    roll_number: "22BCE7796",
    odd_numbers: odd,
    even_numbers: even,
    alphabets,
    special_characters: special,
    sum,
    concat_string
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
