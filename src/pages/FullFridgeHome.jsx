import React, { useState } from "react";

const FullFridgeHome = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Apple", amount: 14, unit: "pieces" },
    { id: 2, name: "Jam", amount: 1, unit: "jar" },
    { id: 3, name: "Juice", amount: 1, unit: "bottle" },
    { id: 4, name: "Ham", amount: 1, unit: "packet" },
  ]);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleModify = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.amount > 0
          ? { ...item, amount: item.amount - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h1>Full Fridge</h1>
      <ul className="flex flex-col p-2 w-full justify-center items-center">
        {items.map((item) => (
          <li key={item.id} className="w-11/12 m-1 bg-yellow-100 flex justify-between">
            <span>
              {item.name} amount: {item.amount} {item.unit}
            </span>
            <div>
              <button className="mx-2 uppercase" onClick={() => handleModify(item.id)}>Modify</button>
              <button className="mx-2 uppercase" onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FullFridgeHome;
