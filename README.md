A simple web application to calculate **Body Mass Index (BMI)** based on user-provided weight and height. Built using **Node.js**, **Express**, and plain **HTML/CSS/JavaScript**.

# BMI Calculator (Node.js + Express)

A simple web application for calculating Body Mass Index (BMI) based on user input for weight and height. Built with Node.js, Express, and vanilla JavaScript.

---

## 🚀 Features

- Input your weight and height to calculate BMI.
- Get a clear BMI result with category: Underweight, Normal weight, Overweight, or Obese.
- Responsive and minimal user interface.
- Instant result display using fetch API (no page reload).

---

## 🛠 Installation & Usage

### 1. Install Node.js and npm

- Go to the official Node.js website: [Node.js Official](https://nodejs.org)
- Download the LTS version (Recommended for most users) by clicking the green “LTS” button.
- Run the installer:
  - Open the downloaded `.msi` file.
  - Click "Next" through each step and accept the license agreement.
  - Keep all default settings and make sure "Automatically install the necessary tools" is checked (if available).
  - Click "Install" and wait for it to finish.
- Verify Installation:
  Open your terminal (Command Prompt or VS Code terminal) and run:
  ```bash
  node -v
  npm -v
  ```
  You should see version numbers like:
  ```bash
  v18.17.0
  9.6.7
  ```

### 2. Clone the Repository

Clone this repository to your local machine:
```bash
git clone https://github.com/Raav1s/bmi-calculator
cd bmi-calculator
```

### 3. Install Dependencies

Navigate to the project directory and install the necessary dependencies:
```bash
npm install express
```

### 4. Start the Server

Run the application:
```bash
node app.js
```

### 5. Open in Your Browser

Open [http://localhost:3000](http://localhost:3000) to use the BMI Calculator.

---

## 📁 Project Structure

```
├── app.js         # Express server
├── index.html     # Frontend UI
├── style.css      # Stylesheet
├── script.js      # Client-side logic
```

---

## 📦 Dependencies

- [express](https://www.npmjs.com/package/express) — Web framework for Node.js.
- [Node.js](https://nodejs.org) — JavaScript runtime used for building the application.
