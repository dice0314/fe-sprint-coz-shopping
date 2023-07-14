import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";
import ItemFilter from "../component/ItemFilter";
import './products.css'

export default function Products({ data, filterType, handleFilterClick, handleBookmarkClick, bookmarkList }) {
    return (
        <section>
            <Header />
            <div className="product-container">
                <ItemFilter data={data} handleFilterClick={handleFilterClick}/>
                <ul className="item-list">
                    {data.map((item) => (
                        filterType === "All" ?
                        <Item key={item.id} id={item.id}  item={item} handleBookmarkClick={handleBookmarkClick} bookmarkList={bookmarkList}/> : item.type === filterType ? 
                        <Item key={item.id} id={item.id} item={item} handleBookmarkClick={handleBookmarkClick} bookmarkList={bookmarkList}/> : null
                    ))}
                </ul>
                    
            </div>
            <Footer />
        </section>
    )
}