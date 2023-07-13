import { useState } from 'react';
import './itemFilter.css'

export default function ItemFilter({ data }) {
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
        console.log(filterType)
    };

    return (
        <div className="itemFilter-container">
            <div className="filter-all" onClick={handleFilterClick}>
                <img src="/image_component/All.png" alt="logo" />
                <span className="filter-name itemFilter-select">전체</span>
            </div>
            <div className="filter-product" onClick={handleFilterClick}>
                <img src="/image_component/Product.png" alt="logo" />
                <span className="filter-name">상품</span>
            </div>
            <div className="filter-category" onClick={handleFilterClick}>
                <img src="/image_component/Category.png" alt="logo" />
                <span className="filter-name">카테고리</span>
            </div>
            <div className="filter-exhibition" onClick={handleFilterClick}>
                <img src="/image_component/Exhibition.png" alt="logo" />
                <span className="filter-name">기획전</span>
            </div>
            <div className="filter-brand" onClick={handleFilterClick}>
                <img src="/image_component/Brand.png" alt="logo" />
                <span className="filter-name">브랜드</span>
            </div>
        </div>
    )
}