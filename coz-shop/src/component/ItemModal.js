import './itemModal.css'

export default function ItemModal({ handleModalOpen, clickItem }) {

    return(
        <div className="modal-container" onClick={handleModalOpen}>
            <img className="modal-item-img"
                src={clickItem.image_url || clickItem.brand_image_url}
                onClick={(event) => event.stopPropagation()}/>
            <div className="modal-close-img-container">
                <img className="modal-close-img" src="/image_component/close.png" />
            </div>
            <div className="modal-info-container" onClick={(event) => event.stopPropagation()}>
                <img className="modal-bookmark-off" src="/image_component/star_off.png" />
                <span>{clickItem.title || clickItem.brand_name}</span>
            </div>
        </div>
    )
}