import Main from './page/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './page/Products';
import Bookmark from './page/Bookmark';
import { useEffect, useState } from 'react';
import { getItem } from './api/ItemDataApi';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      getItem()
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.error(error);
          });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main data={data}/>} />
          <Route path="/products/list" element={<Products data={data}/>} />
          <Route path="/bookmark" element={<Bookmark data={data}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
