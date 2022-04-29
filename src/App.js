import { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList.js";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      isChecked: true,
      itemName: "Learn HTML",
    },
    {
      id: 2,
      isChecked: true,
      itemName: "Learn CSS",
    },
    {
      id: 3,
      isChecked: false,
      itemName: "Learn JS",
    },
    {
      id: 4,
      isChecked: false,
      itemName: "New task",
    },
  ]);

  //1, Tạo ra 1 state là inputValue
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    //2, Thay đổi giá trị của inputValue bằng event.target.value
    setInputValue(event.target.value);
  };
  const handleAddItem = () => {
    //3, Thêm 1 phần tử item mới vào state items
    // với id = id phần tử cuối + 1
    // isChecked = false
    // itemName = inputValue
    const newId = items[items.length - 1].id + 1;
    const newItem = {
      id: newId,
      itemName: inputValue,
      isChecked: false,
    };
    setItems((prev) => {
      // const newItems = [...prev];
      const newItems = prev.map(element => element);
      newItems.push(newItem);
      return newItems;
    });
  };
  return (
    <div className="App">
      <input type={"text"} onChange={(e) => handleChange(e)} />
      <button onClick={handleAddItem}>Add item</button>
      <ItemList items={items} />
    </div>
  );
}

export default App;
