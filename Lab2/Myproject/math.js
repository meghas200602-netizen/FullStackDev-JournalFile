function simpleInterest(p, r, t){
  return (p * r * t) / 100;
}

function compoundInterest(p, r, t){
  return p * Math.pow((1 + r / 100), t) - p;
}

module.exports = { simpleInterest, compoundInterest}