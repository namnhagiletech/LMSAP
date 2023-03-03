/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import './index.scss';
import TitleCommon from '../../components/TitleCommon';
import ChatIcon from '../../assets/icons/Chat';
import ChatBox from './features/ChatBox';
import UserList from './features/UserList';

const Chat = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<string>('Test1');
  const [listUser, setListUser] = useState([
    {
      id: 1,
      name: 'Test1',
      age: 23,
    },
    {
      id: 2,
      name: 'Test2',
    },
    {
      id: 3,
      name: 'Test3',
    },
    {
      id: 4,
      name: 'Test4',
    },
    {
      id: 5,
      name: 'Test5',
    },
  ]);

  const onChangeName = (params: any) => {
    setCurrentUser(params);
    setIsShow(!isShow);
  };

  const onChangeView = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);
  }, []);

  return (
    <div className='chat'>
      <div className='hidden md:block'>
        <TitleCommon icon={<ChatIcon />} title='チャット' subtitle='Chat' height='90px' />
      </div>
      {isMobile ? (
        <div className='chat__content grid grid-cols-3'>
          {!isShow && <UserList listUser={listUser} setCurrentUser={onChangeName} />}
          {isShow && (
            <ChatBox listUser={listUser} currentUser={currentUser} setShow={onChangeView} />
          )}
        </div>
      ) : (
        <div className='chat__content grid grid-cols-3'>
          <UserList listUser={listUser} setCurrentUser={onChangeName} />
          <ChatBox listUser={listUser} currentUser={currentUser} />
        </div>
      )}
    </div>
  );
};

export default Chat;
