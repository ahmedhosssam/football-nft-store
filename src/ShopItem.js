const ShopItem = ({ img, name, price, id }) => {
  return (
    <div className="item" key={id}>
      <div className="img-holder">
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <h3>{price} ETH</h3>
    </div>
  );
};

export default ShopItem;
