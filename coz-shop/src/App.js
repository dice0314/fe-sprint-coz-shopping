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

  const [filterType, setfilterType] = useState("All");

  const handleFilterClick = (event) => {
      const filterName = event.currentTarget.querySelector('.filter-name');
      const selectedFilter = filterName.textContent;

      if(selectedFilter === "전체"){
          setfilterType("All");
      } else if(selectedFilter === "상품"){
          setfilterType("Product");
      } else if(selectedFilter === "카테고리"){
          setfilterType("Category");
      } else if(selectedFilter === "기획전"){
          setfilterType("Exhibition");
      } else if(selectedFilter === "브랜드"){
          setfilterType("Brand");
      }
        
      const filterNames = document.querySelectorAll('.filter-name');

      filterNames.forEach((name) => {
        name.classList.remove('itemFilter-select');
      });
      filterName.classList.add('itemFilter-select');
  };

  const [bookmarkList, setBookmarkList] = useState([]);

  const handleBookmarkClick = (event) => {
    const itemId = Number(event.target.parentNode.id);
    const isBookmark = bookmarkList.findIndex((bookmark) => bookmark.id === itemId);
    const bookmarkStar = event.target;

    if (isBookmark !== -1) {
      const updatedList = [...bookmarkList];
      updatedList.splice(isBookmark, 1);
      bookmarkStar.classList.remove('bookmark-on');
      setBookmarkList(updatedList);

    } else {
      const addBookmark = {
        id: itemId,
      };
      setBookmarkList([...bookmarkList, addBookmark]);
      bookmarkStar.classList.add('bookmark-on');
    }
  };


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <Main
              data={data}
              bookmarkList={bookmarkList}
              handleBookmarkClick={handleBookmarkClick}/>} />
          <Route path="/products/list" element={
            <Products
              data={data}
              filterType={filterType}
              handleFilterClick={handleFilterClick}
              handleBookmarkClick={handleBookmarkClick}
              bookmarkList={bookmarkList}/>} />
          <Route path="/bookmark" element={<Bookmark data={data}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
