import ShopItem from './ShopItem';
import players from './data/players';
import { Link } from 'react-router-dom';
// import ItemPage from './ItemPage';

const Shop = () => {
  return (
    <div className="shop">
      <h3>Collection || Players</h3>
      <div className="shop-items">
        {players.map((player) => {
          return (
            <Link to={`/shop/${player.id}`} key={player.id}>
              <ShopItem
                img={player.img}
                name={player.name}
                price={player.price}
                key={player.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
