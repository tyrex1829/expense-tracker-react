import { Button, Input, InputNumber } from "antd";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Expense() {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const addExpense = () => {
    if (!expense || !amount) {
      return;
    }

    const newList = {
      id: uuidv4(),
      name: expense,
      amount: amount,
    };

    setList([...list, newList]);
    setExpense("");
    setAmount("");
  };

  const deleteList = (id) => {
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-4 mt-9">
      <h1 className="text-3xl font-bold ">Expense Tracker</h1>
      <div className="max-w-screen-md text-3xl font-bold ">
        <Input
          onChange={(e) => {
            console.log(e.target.value);
            setExpense(e.target.value);
          }}
          value={expense}
          placeholder="Expense"
        />
        <InputNumber
          type="number"
          className="w-full"
          placeholder="Amount"
          min={1}
          value={amount}
          onChange={(value) => {
            console.log(value);

            setAmount(value);
          }}
        />
        <div className="flex justify-center m-3 text-3xl font-bold ">
          <Button onClick={addExpense} type="primary">
            Add Expense
          </Button>
        </div>
      </div>
      <ul>
        {list.map((i) => (
          <li className="flex justify-between items-center gap-10" key={i.id}>
            <span>{i.name}</span>
            <span>:</span>
            <span>₹{i.amount}</span>
            <button
              onClick={() => {
                deleteList(i.id);
              }}
              className="bg-red-700 rounded-xl px-5 py-2 text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expense;
