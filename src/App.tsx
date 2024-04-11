import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListProducts from './pages/ListProducts';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={ <ListProducts />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App
