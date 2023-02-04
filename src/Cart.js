import CartItem from './CartItem';
import { itemsArray } from './ItemPage';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        {itemsArray.map((item) => {
          return (
            <CartItem
              key={itemsArray[item]}
              name={item.props.name}
              img={item.props.img}
            />
          );
        })}
      </div>
      <p className="cart-total"></p>
    </div>
  );
};

export default Cart;
