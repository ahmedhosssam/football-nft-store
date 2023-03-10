import CartItem from './CartItem';
import { itemsArray } from '../Shop/ItemPage';
import emptyCartImg from '../../imgs/empty-cart.png';
import { Link } from 'react-router-dom';

const Cart = () => {
  let isActive = itemsArray.length > 0;

  return (
    <div className="cart">
      <div>{isActive ? <YourChoices /> : <EmptyCart />}</div>
      <div>{isActive ? <MainCart /> : ''}</div>
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

const MainCart = () => {
  let totalPrice = 0;
  // Calculate The totalprice of the items
  for (let i = 0; i < itemsArray.length; i++) {
    totalPrice = totalPrice + itemsArray[i].props.price;
  }

  return (
    <div className="main-cart">
      <div className="cart-items">
        {itemsArray.map((item) => {
          return (
            <CartItem
              key={itemsArray[item]}
              name={item.props.name}
              img={item.props.img}
              price={item.props.price}
            />
          );
        })}
      </div>
      <p className="cart-total">{`Total : ${totalPrice} ETH`}</p>
      <button
        onClick={() => {
          alert('Thanks for coming by :)');
        }}
      >
        Proceed To Payment
      </button>
    </div>
  );
};

const YourChoices = () => {
  return <p className="your-nfts-text">Your NFTs</p>;
};

export default Cart;
