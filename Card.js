
import Model from "../Ui/Model";
const Cart = (props) => {
  const cartItems = (
    <ul className="">
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Model>
      {cartItems}
      <div className="">
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className="">
        <button className="">Close</button>
        <button className="">Order</button>
      </div>
    </Model>
  );
};

export default Cart;