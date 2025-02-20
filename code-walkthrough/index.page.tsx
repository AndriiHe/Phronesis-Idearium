import React, { useState } from "react";


export default function() {
  const [amount, setAmount] = useState(1000);
  const [rate, setRate] = useState(5);
  const [term, setTerm] = useState(12);
  const [payment, setPayment] = useState(0);

  const calculatePayment = () => {
    const monthlyRate = rate / 100 / 12;
    const numPayments = term;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    setPayment(monthlyPayment.toFixed(2));
  };

// @chunk {"steps": ["select-dom"]}
  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Loan Calculator</h2>
      <div style={{ marginBottom: "10px" }}>
        <label>Loan Amount ($): </label>
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} style={{ padding: "5px", width: "100%" }} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Annual Interest Rate (%): </label>
        <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} style={{ padding: "5px", width: "100%" }} />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <label>Loan Term (months): </label>
        <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} style={{ padding: "5px", width: "100%" }} />
      </div>
      <button onClick={calculatePayment} style={{ padding: "10px 20px", marginTop: "10px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Calculate</button>
      {payment > 0 && <h3 style={{ marginTop: "20px" }}>Monthly Payment: ${payment}</h3>}
    </div>
  );
};
// @chunk-end