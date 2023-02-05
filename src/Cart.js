import CartItem from './CartItem';
import { itemsArray } from './ItemPage';
import emptyCartImg from './imgs/empty-cart.png';
import { Link } from 'react-router-dom';

let totalPrice = 0;
for (let i = 0; i < itemsArray.length; i++) {
  totalPrice = totalPrice + itemsArray[i].props.price;
}

const Cart = () => {
  return (
    <div className="cart">
      <div>{itemsArray.length > 0 ? '' : <EmptyCart />}</div>
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
      <p className="cart-total">Total : {totalPrice} ETH</p>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <p>YOUR CART IS EMPTY</p>
      <img src={emptyCartImg} alt="empty-cart" />

      <Link to={`/football-nft-store/shop`} style={{ textDecoration: 'none' }}>
        <button>Back To Shop</button>
      </Link>
    </div>
  );
};

export default Cart;
