import React from 'react';
import Footer from "../component/Footer"
import Header from "../component/Header"
import Item from "../component/Item"
import './main.css'

export default function Main({data}) {

    return (
        <section>
            <Header />
            <div className="item-list-container">
                <div className="item-list">
                    <h2>상품 리스트</h2>
                    <ul>
                        {data.map((item, idx) => (
                            idx < 4 ? 
                            <Item item={item} /> : null
                        ))}
                    </ul>
                </div>
                <div className="item-list">
                    <h2>북마크 리스트</h2>
                    <ul>
                        {data.map((item, idx) => (
                            idx < 4 ? 
                            <Item item={item} /> : null
                        ))}
                    </ul>
                </div>
            </div>
                
            <Footer />
        </section>
    )
}