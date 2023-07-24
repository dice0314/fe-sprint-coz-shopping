import './itemModal.css'

export default function ItemModal({ handleModalOpen, clickItem, handleBookmarkClick, bookmarkList }) {

    return(
        <div className="modal-container" onClick={handleModalOpen}>
            <img className="modal-item-img"
                src={clickItem.image_url || clickItem.brand_image_url}
                onClick={(event) => event.stopPropagation()}/>
            <div className="modal-close-img-container">
                <img className="modal-close-img" src="/image_component/close.png" />
            </div>
            <div className="modal-info-container" onClick={(event) => event.stopPropagation()}>
                { bookmarkList.findIndex((bookmark) => bookmark.id === clickItem.id) === -1 ?
                <input type="button" id={clickItem.id} className="modal-bookmark-off" onClick={handleBookmarkClick}/> :
                <input type="button" id={clickItem.id} className="modal-bookmark-off bookmark-on" onClick={handleBookmarkClick}/>}
                <span>{clickItem.title || clickItem.brand_name}</span>
            </div>
        </div>
    )
}