import './item.css'

export default function Item({ item , handleBookmarkClick, bookmarkList}) {

    if(item.type === "Product"){
      return (
        <li key={item.id} id={item.id}>
          {bookmarkList.findIndex((bookmark) => bookmark.id === item.id) === -1 ?
          (<input type="button" id={item.id} className="item-bookmark" onClick={handleBookmarkClick}/>) :
          (<input type="button" id={item.id} className="item-bookmark bookmark-on" onClick={handleBookmarkClick}/>)}
          <img className="item-img" src={item.image_url} alt={item.title}/>
          <div className="item-info-container">
              <span className="item-title">{item.title}</span>
              <div className="item-info-container2">
                  <span className="item-discountPer">{item.discountPercentage}%</span>
                  <span className="item-info">{Number(item.price).toLocaleString()}원</span>
              </div>
          </div>
        </li>
      )
    } else if(item.type === "Category") {
      return (
        <li key={item.id} id={item.id}>
          {bookmarkList.findIndex((bookmark) => bookmark.id === item.id) === -1 ?
          (<input type="button" id={item.id} className="item-bookmark" onClick={handleBookmarkClick}/>) :
          (<input type="button" id={item.id} className="item-bookmark bookmark-on" onClick={handleBookmarkClick}/>)}
          <img className="item-img" src={item.image_url} alt={item.title} />
          <div className="item-info-container">
              <span className="item-title">#{item.title}</span>
          </div>
        </li>
      )
    } else if(item.type === "Exhibition") {
      return (
        <li key={item.id} id={item.id}>
          {bookmarkList.findIndex((bookmark) => bookmark.id === item.id) === -1 ?
          (<input type="button" id={item.id} className="item-bookmark" onClick={handleBookmarkClick}/>) :
          (<input type="button" id={item.id} className="item-bookmark bookmark-on" onClick={handleBookmarkClick}/>)}
          <img className="item-img" src={item.image_url} alt={item.title} />
          <div className="item-ex-info-container">
              <span className="item-title">{item.title}</span>
              <span className="item-ex-info">{item.sub_title}</span>
          </div>
        </li>
      )
    } else if(item.type === "Brand") {
      return (
        <li key={item.id} id={item.id}>
          {bookmarkList.findIndex((bookmark) => bookmark.id === item.id) === -1 ?
          (<input type="button" id={item.id} className="item-bookmark" onClick={handleBookmarkClick}/>) :
          (<input type="button" id={item.id} className="item-bookmark bookmark-on" onClick={handleBookmarkClick}/>)}
          <img className="item-img" src={item.brand_image_url} alt={item.brand_name} />
          <div className="item-info-container">
              <span className="item-title">{item.brand_name}</span>
              <div className="item-info-container2">
                  <p>관심고객수</p>
                  <span className="item-info">{item.follower.toLocaleString()}</span>
              </div>
          </div>
        </li>
      )
    }
  }