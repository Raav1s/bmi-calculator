const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  const { weight, height } = req.body;
  const weightNum = parseFloat(weight);
  const heightNum = parseFloat(height);

  if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
    return res.json({ error: "Weight and height must be positive numbers" });
  }

  const bmi = weightNum / (heightNum * heightNum);
  let category = "";

  if (bmi < 18.5) category = "Underweight";
  else if (bmi >= 18.5 && bmi < 24.9) category = "Normal weight";
  else if (bmi >= 25 && bmi < 29.9) category = "Overweight";
  else category = "Obese";

  res.json({ bmi: bmi.toFixed(2), category });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
