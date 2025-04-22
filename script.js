const form = document.getElementById("bmi-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const errorMessage = document.getElementById("error-message");
  const resultDiv = document.getElementById("result");
  const bmiValue = document.getElementById("bmi-value");
  const bmiCategory = document.getElementById("bmi-category");
  
  errorMessage.textContent = "";
  resultDiv.classList.add("hidden");
  bmiCategory.style.color = "black";

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ weight, height }),
    });
    const data = await response.json();
    if (data.error) {
      errorMessage.textContent = data.error;
    } else {
      bmiValue.textContent = `BMI: ${data.bmi}`;
      bmiCategory.textContent = `Category: ${data.category}`;
      if (data.category === "Normal weight") {
        bmiCategory.style.color = "green";
      } else if (data.category === "Overweight") {
        bmiCategory.style.color = "orange";
      } else {
        bmiCategory.style.color = "red";
      }
      resultDiv.classList.remove("hidden");
    }
  } catch (error) {
    errorMessage.textContent = "Error calculating BMI. Try again.";
  }
});
