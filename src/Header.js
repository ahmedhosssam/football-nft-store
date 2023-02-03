import './App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/shopping-cart">
        <button className="header-name">FOOTBALL NFT</button>
      </Link>
      <div className="header-buttons">
        <Link to="/shopping-cart/shop">
          <button>Shop</button>
        </Link>
        <Link to="/shopping-cart/cart">
          <button>Cart</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
