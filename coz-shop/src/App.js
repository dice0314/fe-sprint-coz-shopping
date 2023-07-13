import Main from './page/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './page/Products';
import Bookmark from './page/Bookmark';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products/list" element={<Products />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
