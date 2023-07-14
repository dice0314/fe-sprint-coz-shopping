import { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";
import ItemFilter from "../component/ItemFilter";
import './products.css'

export default function Products({ data, handleBookmarkClick, bookmarkList }) {
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
                <ItemFilter data={data} handleFilterClick={handleFilterClick}/>
                <ul className="item-list">
                    {filterItem.map((item) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            item={item}
                            handleBookmarkClick={handleBookmarkClick}
                            bookmarkList={bookmarkList}/>
                    ))}
                    {filterItem.length === 0 && <li>아무것도 없음</li>}
                </ul>
            </div>
            <Footer />
        </section>
    )
}