// import { useActionData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import players from './data/players';

const ItemPage = () => {
  let { id } = useParams();
  let player = players.find((player) => player.id === id);

  return (
    <div className="player-page">
      <div className="player-item">
        <div className="img-holder-player-page">
          <img src={player.img} alt={player.name} />
          <button>Add To Cart</button>
        </div>
        <div className="player-discription">
          <h1>{player.name}</h1>
          <p>Price : {player.price}</p>
          <p>Age : {player.age}</p>
          <p>Height : {player.heigth}</p>
          <p>Club : {player.club}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
