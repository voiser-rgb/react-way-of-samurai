import React from 'react';
import profModule from "./Profile.module.css";

const Profile = () => {
    return <div className={profModule.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={profModule.posts}>
        <div className={profModule.item}>
          post 1
        </div>
        <div className={profModule.item}>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;