import Main from './page/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './page/Products';
import Bookmark from './page/Bookmark';
import { useEffect, useState } from 'react';
import { getItem } from './api/ItemDataApi';
import ItemModal from './component/ItemModal';
import BookmarkToast from './component/BookmarkToast';

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

  const [bookmarkList, setBookmarkList] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [actionType, setActionType] = useState('');

  const handleBookmarkClick = (event) => {
    const itemId = Number(event.target.id);
    const isBookmark = bookmarkList.findIndex((bookmark) => bookmark.id === itemId);
    const bookmarkStar = event.target;

    if (isBookmark !== -1) {
      const updatedList = [...bookmarkList];
      updatedList.splice(isBookmark, 1);
      bookmarkStar.classList.remove('bookmark-on');
      setBookmarkList(updatedList);
      setActionType('remove');
      setShowToast(true);
    } else {
      const addBookmark = {
        id: itemId,
      };
      setBookmarkList([...bookmarkList, addBookmark]);
      bookmarkStar.classList.add('bookmark-on');
      setActionType('add');
      setShowToast(true);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickItem, setClickItem] = useState();

  const handleModalOpen = (event) => {
    setIsModalOpen(!isModalOpen);
    if(event.target.id){
      const result = data.find((item) => item.id === Number(event.target.id))
      setClickItem(result)
    }
  }
  
  return (
    <Router>
      <div className="App">
        {isModalOpen ?
          <ItemModal
            handleModalOpen={handleModalOpen}
            clickItem={clickItem}
            handleBookmarkClick={handleBookmarkClick}
            bookmarkList={bookmarkList} /> : null}
          <BookmarkToast
            showToast={showToast}
            setShowToast={setShowToast}
            bookmarkList={bookmarkList}
            actionType={actionType} />
        <Routes>
          <Route path="/" element={
            <Main
              data={data}
              bookmarkList={bookmarkList}
              handleBookmarkClick={handleBookmarkClick}
              handleModalOpen={handleModalOpen}
              setClickItem={setClickItem} />} />
          <Route path="/products/list" element={
            <Products
              data={data}
              handleBookmarkClick={handleBookmarkClick}
              bookmarkList={bookmarkList}
              handleModalOpen={handleModalOpen}
              setClickItem={setClickItem} />} />
          <Route path="/bookmark" element={
            <Bookmark
              data={data}
              handleBookmarkClick={handleBookmarkClick}
              bookmarkList={bookmarkList}
              handleModalOpen={handleModalOpen}
              setClickItem={setClickItem} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
