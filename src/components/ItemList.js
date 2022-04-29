import "../styles/Home.css";
import Item from "./Item";

const ItemList = ({ items, setItems }) => {
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          isChecked={item.isChecked}
          itemName={item.itemName}
          setItems={setItems}
        />
      ))}
    </div>
  );
};

export default ItemList;
