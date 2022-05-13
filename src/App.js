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

  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
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

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleChangeMode = (newMode) => {
    setMode(newMode);
  };

  //Tạo ra state viewList để truyền xuống ItemList
  const [viewList, setViewList] = useState(items);

  useEffect(() => {
    let result = [];
    if (mode === "All") {
      result = items.map((item) => item);
      // result = [...items]
      // spread operator: trải các giá trị của mảng/object ra
    } else if (mode === "Active") {
      result = items.filter((item) => {
        return item.isChecked === false;
      });
    } else if (mode === "Completed") {
      result = items.filter((item) => {
        return item.isChecked === true;
      });
    }
    setViewList(result);
  }, [mode, items, searchValue]);

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
      {/* Add a search box and its button */}
      {/* //insert 1 input tag and 1 button tag with a function "handleSearch" */}

      <input placeholder="Search" type="text" onChange={(e) => handleChangeSearch(e)} />
      <hr />
      <input type="text" onChange={(e) => handleChange(e)} />
      <button onClick={handleAddItem}>Add item</button>
      <ItemList items={viewList} setItems={setItems} />
    </div>
  );
}

export default App;
