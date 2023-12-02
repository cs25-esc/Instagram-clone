import React from 'react'
import './Feed.css'

function Feed() {
  return (
    <div className='Feed'>
        <div className='FeedHeader'>
            <div className='Avatar'>
            <div className='AvatarContainer'>
               <img src='https://images.pexels.com/photos/6601811/pexels-photo-6601811.jpeg?auto=compress&cs=tinysrgb&w=800'></img>
            </div>

            </div>
            <div className='NameUsername'>
                <h5>Roger Federer</h5>
            </div>
            <div className='NameUserid'>
                <p>@RogerFederer</p>
            </div>
        </div>
        <div className='PostPhotoContainer'>
        <img src="https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
            </div>
    </div>
  )
}

export default Feed