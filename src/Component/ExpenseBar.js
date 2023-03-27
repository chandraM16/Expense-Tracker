import React, { useState, useEffect } from "react";
import { MainStateObject } from "./GlobalContext";
import { useContext } from "react";
export const ExpenseBar = ({ log }) => {
  const { state, setState } = useContext(MainStateObject);
  const [bgColor, setBgColor] = useState("red");
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    if (log.amount < 0) {
      setBgColor("red");
    } else {
      setBgColor("#0abf0a");
    }
  }, []);

  function handleCloseExpenseClick(id) {
    const newLog = state.logs.filter((data) => data.id !== id);
    setState({
      ...state,
      logs: newLog,
    });
  }

  return (
    <div
      className="expense_bar"
      onMouseEnter={() => {
        setIsIn(true);
      }}
      onMouseLeave={() => setIsIn(false)}
    >
      {isIn && (
        <div
          className="expense_close"
          onClick={() => handleCloseExpenseClick(log.id)}
        >
          X
        </div>
      )}

      <div className="expense_info">
        <h4>{log.name}</h4>
        <h4>{log.amount} &#x20B9;</h4>
      </div>
      <div className="right_box" style={{ backgroundColor: bgColor }}></div>
    </div>
  );
};
