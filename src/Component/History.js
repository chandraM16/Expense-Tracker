import React from "react";
import { ExpenseBar } from "./ExpenseBar";
import { MainStateObject } from "./GlobalContext";
import { useContext } from "react";
export const History = () => {
  const { state } = useContext(MainStateObject);
  return (
    <div className="history_cont">
      <h3>History</h3>
      <div className="expense_bar_cont">
        {state.logs.map((log) => {
          return <ExpenseBar log={log} key={log.id} />;
        })}
      </div>
    </div>
  );
};
