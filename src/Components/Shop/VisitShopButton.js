import { Link } from 'react-router-dom';

const VisitShopButton = () => {
  return (
    <div className="home">
      <Link to="/football-nft-store/shop">
        <button className="visit-shop-button">Visit The Shop</button>
      </Link>
    </div>
  );
};

export default VisitShopButton;
