import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";
import ItemFilter from "../component/ItemFilter";
import './products.css'

export default function Products({ data }) {
    return (
        <section>
            <Header />
            <div className="product-container">
                <ItemFilter data={data}/>
                <ul className="item-list">
                    {data.map((item) => (
                        <Item item={item} />
                    ))}
                </ul>
                    
            </div>
            <Footer />
        </section>
    )
}