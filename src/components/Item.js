import { useState } from "react";
import "../styles/Item.css";

const Item = ({ id, isChecked, itemName, setItems }) => {
  const [check, setCheck] = useState(isChecked);

  const handleCheck = () => {
    // setCheck((prev) => {
    //   const result = !prev;
    //   return result;
    // });
    const result = !check;
    setCheck(result);
  };

  const handleDelete = () => {
    // sử dụng hàm filter của array để lọc ra những phần tử có item.id khác với id của item bị xoá
    // setItems với giá trị mảng vừa được filter
    setItems((prev) => {
      const result = prev.filter((item) => item.id !== id);
      return result;
    });
  };

  return (
    <div className="item">
      <input onChange={handleCheck} type="checkbox" checked={check} />
      <span>{itemName}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
