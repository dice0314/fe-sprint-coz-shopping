import React, { useEffect, useState } from 'react';
import Footer from "../component/Footer"
import Header from "../component/Header"
import Item from "../component/Item"
import './main.css'
import { getItem } from "../api/ItemDataApi"

export default function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getItem()
          .then((res) => {
            setData(res.data);
          })
          .catch((error) => {
            console.error(error);
            });
    }, []);

    return (
        <section>
            <Header />
            <div className="item-list-container">
                <div className="item-list">
                    <h2>상품 리스트</h2>
                    <ul>
                        {data.map((item) => (
                            <Item item={item} />
                        ))}
                    </ul>
                </div>
                <div className="bookmark-list">
                    <h2>북마크 리스트</h2>
                    <ul>
                        {data.map((item) => (
                            <Item item={item} />
                        ))}
                    </ul>
                </div>
            </div>
                
            <Footer />
        </section>
    )
}