import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 3, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handeleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };
  const handleDecrement = (id) => {
    const elementIndex = counters.findIndex((c) => c.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
    
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handeleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сбросить
      </button>
    </>
  );
};

export default CountersList;
