import { useState, useRef } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";
import ItemFilter from "../component/ItemFilter";
import './products.css'

export default function Products({ data, handleBookmarkClick, bookmarkList, handleModalOpen, setClickItem }) {
    const [filterType, setfilterType] = useState("All");
    const itemFilterRef = useRef(null);

    const handleFilterClick = (type) => {
        setfilterType(type);
    };
    
    const filterItem = data.filter((item) => {
        if (filterType === "All") {
          return true;
        }
        return item.type === filterType;
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
                    {filterItem.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            item={item}
                            handleBookmarkClick={handleBookmarkClick}
                            bookmarkList={bookmarkList}
                            handleModalOpen={handleModalOpen}
                            setClickItem={setClickItem} />
                    ))}
                </ul>
            </div>
            <Footer />
        </section>
    )
}