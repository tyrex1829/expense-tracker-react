import { DeleteOutlined } from "@ant-design/icons";
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

  const truncate = (str, n) => {
    return str.length > n ? str.slice(0, n) + "..." : str;
  };

  return (
    <div className="flex flex-col mx-auto items-center justify-center gap-4 mt-9 w-full px-4">
      <h1 className="text-3xl font-bold ">Expense Tracker</h1>
      <div className="max-w-screen-md font-bold mt-2">
        <Input
          onChange={(e) => {
            setExpense(e.target.value);
          }}
          value={expense}
          placeholder="Expense"
        />
        <InputNumber
          type="number"
          className="w-full mt-2"
          placeholder="Amount"
          min={1}
          value={amount}
          onChange={(value) => {
            setAmount(value);
          }}
        />
        <div className="flex justify-center m-3">
          <Button onClick={addExpense} type="primary">
            Add Expense
          </Button>
        </div>
      </div>
      <ul className="flex flex-col gap-6 w-full max-w-screen-md">
        {list.map((i) => (
          <li
            className="bg-slate-300 shadow-lg rounded-md px-6 py-3 flex justify-between items-center flex-wrap"
            key={i.id}
          >
            <span className="text-2xl font-medium flex-grow max-w-[150px] truncate">
              {truncate(i.name, 10)}
            </span>
            <span className="text-lg flex-shrink-0 flex-grow max-w-[100px] truncate hover:whitespace-normal hover:overflow-visible">
              ₹{i.amount}
            </span>
            <button
              onClick={() => {
                deleteList(i.id);
              }}
              className="bg-red-700 rounded-xl px-5 py-2 text-white flex-shrink-0"
            >
              <DeleteOutlined />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expense;
