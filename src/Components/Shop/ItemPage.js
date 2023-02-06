import { Link, useParams } from 'react-router-dom';
import players from '../../data/players';
import CartItem from '../Cart/CartItem';

let itemsArray = [];

const ItemPage = () => {
  let { id } = useParams();

  // eslint-disable-next-line eqeqeq
  let player = players.find((player) => player.id == id);

  return (
    <div className="player-page">
      <div className="player-item">
        <div className="img-holder-player-page">
          <img src={player.img} alt={player.name} />
        </div>
        <div className="player-discription">
          <h1>{player.name}</h1>
          <p>Price : {player.price}</p>
          <p>Age : {player.age}</p>
          <p>Height : {player.heigth}</p>
          <p>Club : {player.club}</p>
          <Link to={`/football-nft-store/cart`}>
            <button
              id="addToCartButton"
              className={player.name}
              onClick={(e) => {
                itemsArray.push(createCartItem(e));
              }}
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

const createCartItem = (e) => {
  const name = e.target.className;
  let player = players.find((player) => player.name === name);

  let cartItem = (
    <CartItem
      img={player.img}
      name={player.name}
      price={player.price}
      key={player.id}
    />
  );

  return cartItem;
};

export { itemsArray };
