import React from 'react'
import ArrowRight from '../../../assets/icons/ArrowRight';

const ChatBox = ({ listUser, currentUser, setShow }: any) => {
  const userChat = listUser.filter((el: any) => (el.name === currentUser));

  return (
    <>
      {userChat.map((el: any) => (
        <div className="col-span-3 md:col-span-2 " key={el.id}>
          <div className="grid grid-cols-3 md:grid-cols-1">
            <div className="self-center cursor-pointer md:hidden ml-4" onClick={setShow}>
              <ArrowRight />
            </div>
            <p className='chat__title '>{el.name}</p>
          </div>
          <div className="chat__box flex flex-col justify-between px-3">
            <div className="flex flex-col mt-5">
              <div className="flex justify-start">
                <div className='circle'></div>
                <div className="flex flex-col ml-6 mb-4">
                  <div className="friend">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, recusandae perferendis.
                  </div>
                  <span>{el.name}, 10:21</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex flex-col mr-6 mb-4">
                  <div className="me">
                    sadasdasd
                  </div>
                </div>
                <div className='circle'></div>
              </div>
              <div className="flex justify-start">
                <div className='circle'></div>
                <div className="flex flex-col ml-6 mb-4">
                  <div className="friend">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, recusandae perferendis. Dolorum ab placeat qui autem quas eaque ipsum? Labore, maxime! Labore vero, eveniet accusantium ratione illum enim recusandae iusto.
                  </div>
                  <span>{el.name}, 10:21</span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className='circle'></div>
                <div className="flex flex-col ml-6 mb-4">
                  <div className="friend">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, recusandae perferendis. Dolorum ab placeat qui autem quas eaque ipsum? Labore, maxime! Labore vero, eveniet accusantium ratione illum enim recusandae iusto.
                  </div>
                  <span>{el.name}, 10:21</span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className='circle'></div>
                <div className="flex flex-col ml-6 mb-4">
                  <div className="friend">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, recusandae perferendis. Dolorum ab placeat qui autem quas eaque ipsum? Labore, maxime! Labore vero, eveniet accusantium ratione illum enim recusandae iusto.
                  </div>
                  <span>{el.name}, 10:21</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <textarea
              className="w-full bg-[#FCFCFC] border border-l-0 py-5 px-3 "
              placeholder="メッセージを入力する"
            ></textarea>
          </div>
        </div>
      ))}

    </>
  )
}

export default ChatBox