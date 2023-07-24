import React from 'react';
import './itemFilter.css';

const filterOptions = [
  { name: '전체', img: '/image_component/All.png', type: 'All' },
  { name: '상품', img: '/image_component/Product.png', type: 'Product' },
  { name: '카테고리', img: '/image_component/Category.png', type: 'Category' },
  { name: '기획전', img: '/image_component/Exhibition.png', type: 'Exhibition' },
  { name: '브랜드', img: '/image_component/Brand.png', type: 'Brand' },
];

export default function ItemFilter({ handleFilterClick, itemFilterRef, filterType }) {
  return (
    <div className="itemFilter-container">
      {filterOptions.map((option) => (
        <div key={option.type} className="filter-option" onClick={() => handleFilterClick(option.type)}>
          <img src={option.img} alt={option.name} />
          <span
            ref={itemFilterRef}
            className={`filter-name ${filterType === option.type ? "itemFilter-select" : ""}`}>{option.name}</span>
        </div>
      ))}
    </div>
  );
}