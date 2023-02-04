const CartItem = ({ img, name, price, id }) => {
  return (
    <div key={id} className="cart-item">
      <div className="cart-image-holder">
        <img src={img} alt={name} />
      </div>
      <div className="cart-details">
        <p className="cart-item-name">{name}</p>
        <p className="cart-item-price">{price}</p>
      </div>
    </div>
  );
};

export default CartItem;
