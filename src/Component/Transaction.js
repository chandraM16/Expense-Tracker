import React from "react";
import { MainStateObject } from "./GlobalContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const Transaction = () => {
  const { state, setState } = useContext(MainStateObject);
  const [info, setInfo] = useState({
    name: "",
    amount: "",
  });
  // console.log(info);
  function handleAddLogClick(e) {
    if (info.name && info.amount) {
      const uid = uuidv4();
      const newLogs = [{ id: uid, ...info } ,...state.logs];
      const newBal = state.bal + info.amount;
      if (info.amount >= 0) {
        const newIncome = state.income + info.amount;
        setState({
          ...state,
          bal: newBal,
          income: newIncome,
          logs: newLogs,
        });
      } else {
        const newExpense = state.expense + -info.amount;
        setState({
          ...state,
          bal: newBal,
          expense: newExpense,
          logs: newLogs,
        });
      }
      setInfo({
        name: "",
        amount: "",
      });
    } else {
      alert("Enter Item Name and Item Amount");
    }
  }
  return (
    <div className="transaction_cont">
      <h3>Transaction</h3>

      <div className="input_box">
        <label htmlFor="item">Item Name</label>
        <input
          type="text"
          id="item"
          className="item_input"
          placeholder="Name....."
          value={info.name}
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
        <label htmlFor="amount">Amount : </label>
        <input
          type="number"
          id="amount"
          className="amount_input"
          placeholder="Amount....."
          value={info.amount}
          onChange={(e) => {
            setInfo({ ...info, amount: +e.target.value });
          }}
        />

        <button
          className="btn"
          onClick={(e) => {
            handleAddLogClick(e);
          }}
        >
          Add Transaction
        </button>
        <span>(Positive : Income & Negative : Expense)</span>
      </div>
    </div>
  );
};
