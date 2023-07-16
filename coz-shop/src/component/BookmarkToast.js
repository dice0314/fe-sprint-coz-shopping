import React, { useEffect, useState } from 'react'
import './bookmarkToast.css'

export default function BookmarkToast() {

  return (
    <>
    <div className='toast-container'>
        <img src="/image_component/star_on.png" alt="" />
        <span>상품이 북마크에 추가되었습니다.</span>
    </div>
    <div className='toast-container2'>
        <img src="/image_component/star_off.png" alt="" />
        <span> 상품이 북마크에 추가되었습니다.</span>
    </div>
    </>
  )
}