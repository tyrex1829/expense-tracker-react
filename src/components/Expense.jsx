import { Button, Input, InputNumber } from "antd";
import React, { useState } from "react";

function Expense() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const addExpense = () => {
    if (!expense || !amount) {
      return;
    }
  };

  return (
    <div className="text-3xl font-bold flex flex-col mx-auto items-center justify-center gap-4 mt-9">
      <h1>Expense Tracker</h1>
      <div className="max-w-screen-md">
        <Input
          onChange={(e) => {
            setExpense(e.target.value);
          }}
          value={expense}
          placeholder="Expense"
        />
        <InputNumber
          className="w-full"
          placeholder="Amount"
          min={1}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <div className="flex justify-center m-3">
          <Button onClick={addExpense} type="primary">
            Add Expense
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Expense;
