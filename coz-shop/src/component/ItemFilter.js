import './itemFilter.css'

export default function ItemFilter() {
    

    return (
        <div className="itemFilter-container">
            <div className="filter-all">
                <img src="/image_component/All.png" alt="logo" />
                <span className="filter-name itemFilter-select">전체</span>
            </div>
            <div className="filter-product">
                <img src="/image_component/Product.png" alt="logo" />
                <span className="filter-name">상품</span>
            </div>
            <div className="filter-category">
                <img src="/image_component/Category.png" alt="logo" />
                <span className="filter-name">카테고리</span>
            </div>
            <div className="filter-exhibition">
                <img src="/image_component/Exhibition.png" alt="logo" />
                <span className="filter-name">기획전</span>
            </div>
            <div className="filter-brand">
                <img src="/image_component/Brand.png" alt="logo" />
                <span className="filter-name">브랜드</span>
            </div>
        </div>
    )
}