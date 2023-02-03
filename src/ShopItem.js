const ShopItem = ({ img, name, price }) => {
  return (
    <div className="item">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default ShopItem;
