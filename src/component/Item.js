import './item.css'

export default function Item({ item , handleBookmarkClick, bookmarkList, handleModalOpen}) {
  const isBookmarked = bookmarkList.findIndex((bookmark) => bookmark.id === item.id) !== -1;

  return (
    <li key={item.id} id={item.id}>
      <input
        type="button"
        id={item.id}
        className={`item-bookmark ${isBookmarked ? 'bookmark-on' : ''}`}
        onClick={handleBookmarkClick}
      />
      <img className="item-img" id={item.id} onClick={handleModalOpen} src={item.image_url || item.brand_image_url} alt={item.title || item.brand_image_url} />
      <div className="item-info-container">
          <div className="item-info-wrapper1">
            <span className="item-title">{item.type === "Category" ? `# ${item.title}` : item.title || item.brand_name}</span>
            {item.type !== "Category" ? (<span className="item-ex-info">{item.sub_title}</span>) : null}
          </div>
          {item.type === "Product" || item.type === "Brand" ? (<div className="item-info-wrapper2">
              {item.type === "Product" ?
                <span className="item-discountPer">{item.discountPercentage}%</span> : <p>관심고객수</p>}
              <span className="item-info">
                {item.type === "Product" ? `${Number(item.price).toLocaleString()}원` : item.follower.toLocaleString() }
              </span>
          </div>) : null}
      </div>
    </li>
  )
}