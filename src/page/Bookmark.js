import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ItemFilter from "../component/ItemFilter";
import Item from "../component/Item";

export default function Bookmark({ data , handleBookmarkClick, bookmarkList, handleModalOpen, setClickItem }) {

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

    const filterBookmark = data.filter((item) => {
        const bookmarkIndex = bookmarkList.findIndex((bookmark) => bookmark.id === item.id);
        if (bookmarkIndex !== -1 && filterType === "All") {
          return true;
        } else if (bookmarkIndex !== -1 && item.type === filterType) {
          return true;
        }
        return false;
    });
    
    return (
        <section>
            <Header />
            <div className="product-container">
                <ItemFilter data={data} handleFilterClick={handleFilterClick} />
                <ul className="item-list">
                    {filterBookmark.length > 0 ? (
                        filterBookmark.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            item={item}
                            handleBookmarkClick={handleBookmarkClick}
                            bookmarkList={bookmarkList}
                            handleModalOpen={handleModalOpen}
                            setClickItem={setClickItem} />
                        ))
                    ) : (<li className="bookmark-none">북마크된 상품이 없습니다.</li>)}
                </ul>
            </div>
            <Footer />
        </section>
    )
}