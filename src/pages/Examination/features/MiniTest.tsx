import React, { useState } from 'react';
import '../index.scss';
import CloseIcon from '../../../assets/icons/Close';
import { Link } from 'react-router-dom';

const MiniTest = ({ onClose }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentTest, setCurrentTest] = useState<boolean>(false);

  return (
    <div className='examination__content__trial'>
      <h4 className='examination__content__trial--title'>小テスト</h4>
      {currentTest ? (
        <div className='examination__content__trial--content'>
          <Link to='/AI-test' className='examination__content__trial__minitest'>
            <p className='name'>文化論</p>
            <p className='time'>2022/12/5～2022/12/12</p>
          </Link>
          <Link to='/ai-test' className='examination__content__trial__minitest'>
            <p className='name'>文化論</p>
            <p className='time'>2022/12/5～2022/12/12</p>
          </Link>
        </div>
      ) : (
        <div className='examination__content__trial--content'>※現在小テストはありません</div>
      )}

      <div
        onClick={() => {
          onClose('');
        }}
        className='close'
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default MiniTest;
