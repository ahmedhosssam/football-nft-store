import ShopItem from './ShopItem';
import players from './data/players';

const Shop = () => {
  return (
    <div className="shop">
      <h3>Collection || Planets</h3>
      <div className="shop-items">
        {players.map((player) => {
          return (
            <ShopItem
              img="../imgs/messi.jpg"
              name={player.name}
              price={player.price}
              key={player.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
