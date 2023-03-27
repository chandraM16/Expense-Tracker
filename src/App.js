import "./App.css";
import { Balance } from "./Component/Balance";
import { GlobalContext } from "./Component/GlobalContext";
import { History } from "./Component/History";
import { Transaction } from "./Component/Transaction";

function App() {
  return (
    <GlobalContext>
      <div className="App">
        <h2>Expense Tracker</h2>
        <div className="container">
          <Balance />
          <History />
          <Transaction/>
        </div>
      </div>
    </GlobalContext>
  );
}

export default App;
