import { dummy } from "./test_item"
import './item.css'

export default function Item() {

    return (
      <div key={dummy.items[0].id} className="item">
        <input type="button" className="item-bookmark"></input>
        <img className="item-img" src="image_component/apple_watch.png" alt={dummy.items[0].title}></img>
        <div className="item-info-container">
            <span className="item-title">{dummy.items[0].title}</span>
            <div className="item-info-container2">
                <span className="item-discountPer">{dummy.items[0].discountPercentage}%</span>
                <span className="item-price">{dummy.items[0].price}원</span>
            </div>
        </div>
      </div>
    )
  }