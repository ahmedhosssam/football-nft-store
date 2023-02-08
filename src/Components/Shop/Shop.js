import ShopItem from './ShopItem';
import players from '../../data/players';
import { Link } from 'react-router-dom';
// import ItemPage from './ItemPage';

const Shop = () => {
  return (
    <div className="shop">
      <h3 className="collection-players-headername">Collection || Players</h3>
      <div className="shop-items">
        {players.map((player) => {
          return (
            <div>
              <Link
                to={`/football-nft-store/shop/${player.id}`}
                key={player.id}
                style={{ textDecoration: 'none' }}
              >
                <ShopItem
                  img={player.img}
                  name={player.name}
                  price={player.price}
                  key={player.id}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
