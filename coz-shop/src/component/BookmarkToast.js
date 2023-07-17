import React, { useEffect } from 'react'
import './bookmarkToast.css'

export default function BookmarkToast({ showToast, setShowToast, actionType }) {

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  return (
    <>
      {actionType === 'add' && showToast ? (
        <div className='toast-container'>
          <img src='/image_component/star_on.png' alt='' />
          <span>상품이 북마크에 추가되었습니다.</span>
        </div>
      ) : actionType === 'remove' && showToast && (
        <div className='toast-container'>
          <img src='/image_component/star_off.png' alt='' />
          <span>상품이 북마크에서 제거되었습니다.</span>
        </div>
      )}
    </>
  );
}