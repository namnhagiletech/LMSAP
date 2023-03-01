import React from 'react'
import Mypage from '../../../assets/icons/Mypage'

const UserList = ({ listUser, setCurrentUser }: any) => {
  return (
    <div className="col-span-3 md:col-span-1 md:border-r">
      <p className='chat__title'>参加チャット一覧</p>
      {listUser.map((el: any) => (
        <div key={el.id} className="chat__user flex justify-start items-center gap-8" onClick={() => setCurrentUser(el.name)}>
          <div className="chat__user--avatar">
            <Mypage />
          </div>
          <div className="chat__user--name">
            {el.name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserList