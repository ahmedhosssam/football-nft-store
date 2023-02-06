import '../../App.css';
import Header from '../Header/Header';
import Home from './Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import ItemPage from '../Shop/ItemPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path={`/football-nft-store/shop/:id`} element={<ItemPage />} />
          <Route path="/football-nft-store" element={<Home />} />
          <Route path="/football-nft-store/shop" element={<Shop />} />
          <Route path="/football-nft-store/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;