import './App.css';
import Header from './Header';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import ItemPage from './ItemPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Header />
        <Routes>
          <Route path={`/shopping-cart/shop/:id`} element={<ItemPage />} />
          <Route path="/shopping-cart" element={<Home />} />
          <Route path="/shopping-cart/shop" element={<Shop />} />
          <Route path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
