import { useEffect, useState } from "react";
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
  const [mode, setMode] = useState("All");

  //1, Tạo ra 1 state là inputValue
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    //2, Thay đổi giá trị của inputValue bằng event.target.value
    setInputValue(event.target.value);
  };
  const handleAddItem = () => {
    if (inputValue === "") return;
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
      const newItems = prev.map((element) => element);
      newItems.push(newItem);
      return newItems;
    });
  };

  const handleChangeMode = (newMode) => {
    setMode(newMode);
  };

  //Tạo ra state viewList để truyền xuống ItemList
  const [viewList, setViewList] = useState(items);

  useEffect(() => {
    //Thay đổi viewList tương ứng với chế độ xem và danh sách hiện tại
    // Dựa vào chế độ xem để dùng hàm filter
    let result = [];
    if (mode === "Active") {
      result = items.filter((item) => {
        return item.isChecked === false;
      });
    }
    //else if
    setViewList(result);
  }, [mode, items]);

  return (
    <div className="App">
      <div>
        <button
          className={mode === "All" ? "active" : ""}
          onClick={() => handleChangeMode("All")}
        >
          All
        </button>
        <button
          className={mode === "Active" ? "active" : ""}
          onClick={() => handleChangeMode("Active")}
        >
          Active
        </button>
        <button
          className={mode === "Completed" ? "active" : ""}
          onClick={() => handleChangeMode("Completed")}
        >
          Completed
        </button>
      </div>
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleAddItem}>Add item</button>
      <ItemList items={viewList} setItems={setItems} />
    </div>
  );
}

export default App;
