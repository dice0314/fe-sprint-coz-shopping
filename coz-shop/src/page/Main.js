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
                {data.map((item, idx) => (item.title ?
                    <Item item={item} key={idx} /> : null
                ))}
            </div>
                
            <Footer />
        </section>
    )
}