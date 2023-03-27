import React from "react";
import { useContext } from "react";
import { MainStateObject } from "./GlobalContext";

export const Balance = () => {
  const { state } = useContext(MainStateObject);

  return (
    <div className="balance_cont">
      <div className="balance_box">
        <h6>YOUR BALANCE</h6>
        <h2>&#x20B9; {state.bal}</h2>
      </div>
      <div className="income_expense_box">
        <div className="income_box">
          <h4>INCOME</h4>
          <h3 className="income">&#x20B9; {state.income}</h3>
        </div>
        <div className="expense_box">
          <h4>EXPENSE</h4>
          <h3 className="expense">&#x20B9; {state.expense}</h3>
        </div>
      </div>
    </div>
  );
};
