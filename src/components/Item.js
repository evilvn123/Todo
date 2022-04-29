import { useState } from "react";
import "../styles/Item.css";

const Item = ({ id, isChecked, itemName, setItems }) => {
  const [check, setCheck] = useState(isChecked);

  const handleCheck = () => {
    const result = !check;
    setCheck(result);
    // Thay đổi lại mảng gốc items với giá trị mới của item vừa bị tick

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
      {/* Thay đổi CSS có thêm gạch ngang giữa dòng khi check = true */}
      <span>{itemName}</span> 
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
