import './item.css'

export default function Item({item}) {

    if(item.type === "Product"){
      return (
        <li key={item.id} id={item.id}>
          <input type="button" className="item-bookmark"></input>
          <img className="item-img" src={item.image_url} alt={item.title}></img>
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
          <input type="button" className="item-bookmark"></input>
          <img className="item-img" src={item.image_url} alt={item.title}></img>
          <div className="item-info-container">
              <span className="item-title">#{item.title}</span>
          </div>
        </li>
      )
    } else if(item.type === "Exhibition") {
      return (
        <li key={item.id} id={item.id}>
          <input type="button" className="item-bookmark"></input>
          <img className="item-img" src={item.image_url} alt={item.title}></img>
          <div className="item-info-container">
              <span className="item-title">{item.title}</span>
              <div className="item-info-container2">
                  <span className="item-info">{item.subtitle}</span>
              </div>
          </div>
        </li>
      )
    } else if(item.type === "Brand") {
      return (
        <li key={item.id} id={item.id}>
          <input type="button" className="item-bookmark"></input>
          <img className="item-img" src={item.brand_image_url} alt={item.brand_name}></img>
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