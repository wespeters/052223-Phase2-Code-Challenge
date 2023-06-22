import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8001/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((transaction) => {
        addTransaction(transaction);
      });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleFormSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleFormChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleFormChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleFormChange} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleFormChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
