import './item.css'

export default function Item({item}) {
    return (
      <div key={item.id} className="item">
        <input type="button" className="item-bookmark"></input>
        <img className="item-img" src={item.image_url} alt={item.title}></img>
        <div className="item-info-container">
            <span className="item-title">{item.title}</span>
            <div className="item-info-container2">
                <span className="item-discountPer">{item.discountPercentage}%</span>
                <span className="item-price">{item.price}원</span>
            </div>
        </div>
      </div>
    )
  }