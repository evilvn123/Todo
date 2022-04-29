import "../styles/Home.css";
import Item from "./Item";

const ItemList = ({items}) => {
  
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          isChecked={item.isChecked}
          itemName={item.itemName}
        />
      ))}
    </div>
  );
};

export default ItemList;

// Tạo ra component vs title ở trên, content ở dưới, style phần
// title có font đậm và cỡ chữ lớn hơn
// Sử dụng phương thức .map, props để làm
