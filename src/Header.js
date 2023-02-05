import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/football-nft-store/">
        <button className="header-name">FOOTBALL NFT</button>
      </Link>
      <div className="header-buttons">
        <Link to="/football-nft-store/shop">
          <button>Shop</button>
        </Link>
        <Link to="/football-nft-store/cart">
          <button>Cart</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
