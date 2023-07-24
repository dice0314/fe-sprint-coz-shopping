import { useState, useRef } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import ItemFilter from "../component/ItemFilter";
import Item from "../component/Item";

export default function Bookmark({ data , handleBookmarkClick, bookmarkList, handleModalOpen, setClickItem }) {
    const [filterType, setfilterType] = useState("All");
    const itemFilterRef = useRef(null);

    const handleFilterClick = (type) => {
        setfilterType(type);
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
            <ItemFilter
                    data={data}
                    handleFilterClick={handleFilterClick}
                    itemFilterRef={itemFilterRef}
                    filterType={filterType}/>
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