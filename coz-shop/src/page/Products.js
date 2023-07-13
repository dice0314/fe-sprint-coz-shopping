import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";
import ItemFilter from "../component/ItemFilter";
import './products.css'

export default function Products({ data, filterType, handleFilterClick}) {
    return (
        <section>
            <Header />
            <div className="product-container">
                <ItemFilter data={data} handleFilterClick={handleFilterClick}/>
                <ul className="item-list">
                    {data.map((item) => ( filterType === "All" ? <Item item={item} /> : item.type === filterType ? 
                        <Item item={item} /> : null
                    ))}
                </ul>
                    
            </div>
            <Footer />
        </section>
    )
}