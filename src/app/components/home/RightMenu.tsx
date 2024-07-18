import React from 'react'
import FriendsRequest from '../rightbar/FriendsRequest'
import Birthday from '../rightbar/Birthday'
import Ad from '../rightbar/Ad'

const RightMenu = () => {
  return (
    <div className='flex flex-col gap-6 sticky top-[16px]'>
      <FriendsRequest/>
      <Birthday/>
      <Ad/>
    </div>
  )
}

export default RightMenu