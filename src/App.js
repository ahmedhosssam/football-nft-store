import './App.css';
import Header from './Header';
import VisitShopButton from './VisitShopButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <Header />
      <VisitShopButton />
    </div>
  );
}

export default App;
