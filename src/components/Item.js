import { useState } from "react";
import "../styles/Item.css";

const Item = ({ isChecked, itemName }) => {
  const [check, setCheck] = useState(isChecked);

  const handleCheck = () => {
    // setCheck((prev) => {
    //   const result = !prev;
    //   return result;
    // });
    const result = !check;
    setCheck(result);
  };

  return (
    <div className="item">
      <input onChange={handleCheck} type="checkbox" checked={check} />
      <span>{itemName}</span>
    </div>
  );
};

export default Item;
