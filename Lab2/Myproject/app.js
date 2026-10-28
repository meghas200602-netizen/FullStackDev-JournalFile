// const math = require("./math.js")

// const si = math.simpleInterest(1000, 10, 2);
// const ci = math.compoundInterest(1000, 10, 2);

// console.log("Simple interest:", si)
// console.log("compound interest:", ci.toFixed(2));

const express = require("express");
const math = require("./math.js")

const app = express();

app.get("/", (req, res) => {
  const si = math.simpleInterest(1000, 10, 2);
  const ci = math.compoundInterest(1000, 10, 2);

  res.send(`<h2>Interest Calculator</h2>
    <p>Simple Interest: ${si}</p>
    <p>Compound Interest: ${ci.toFixed(2)}</p>`);
});

app.get("/simpleInterest", (req,res) => {
  const {p,r,t}=req.query;

  res.send(math.simpleInterest(Number(p),Number(r),Number(t)));
});

app.get("/compoundInterest", (req,res) => {
  const {p,r,t}=req.query;

  res.send(math.compoundInterest(Number(p),Number(r),Number(t)));
});




app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});