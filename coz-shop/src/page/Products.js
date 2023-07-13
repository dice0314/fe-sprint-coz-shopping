import Footer from "../component/Footer";
import Header from "../component/Header";
import Item from "../component/Item";
import ItemFilter from "../component/ItemFilter";

export default function Products({ data }) {
    return (
        <section>
            <Header />
            <div>아이템리스트 페이지</div>
            <ItemFilter />
                {data.map((item) => (
                    <Item item={item} />
                ))}
            <Footer />
        </section>
    )
}