import { useState } from "react";
import "./App.css";
import Expense from "./components/Expense";

function App() {
  const [count, setCount] = useState(0);

  return <Expense />;
}

export default App;
