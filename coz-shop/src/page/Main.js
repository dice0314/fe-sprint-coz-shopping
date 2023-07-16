import React from 'react';
import Footer from "../component/Footer"
import Header from "../component/Header"
import Item from "../component/Item"
import './main.css'
import BookmarkToast from '../component/BookmarkToast';

export default function Main({ data, bookmarkList, handleBookmarkClick }) {

    return (
        <section>
            <Header />
            <div className="item-list-container">
                <div className="item-list">
                    <h2>상품 리스트</h2>
                    <ul>
                        {data.map((item, idx) => (
                            idx < 4 ? 
                            <Item
                                key={item.id}
                                id={item.id}
                                item={item}
                                bookmarkList={bookmarkList}
                                handleBookmarkClick={handleBookmarkClick}/> : null
                        ))}
                    </ul>
                </div>
                <div className="item-list">
                    <h2>북마크 리스트</h2>
                    <ul>
                        {bookmarkList.length === 0 ? <li className='bookmark-none'>북마크된 상품이 없습니다.</li> : null}
                        {data.map((item) => {
                            const bookmarkIndex = bookmarkList.findIndex((bookmark) => bookmark.id === item.id);
                            if (bookmarkIndex !== -1 && bookmarkIndex < 4) {
                                return (
                                    <Item
                                        key={item.id}
                                        id={item.id}
                                        item={item}
                                        bookmarkList={bookmarkList}
                                        handleBookmarkClick={handleBookmarkClick}/>
                                );
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
                
            <Footer />
        </section>
    )
}