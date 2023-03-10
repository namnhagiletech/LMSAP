import { Link } from 'react-router-dom';
import HairDryerIcon from '../../assets/icons/HairDryer';
import ScissorsIcon from '../../assets/icons/Scissors';
import ShampooIcon from '../../assets/icons/Shampoo';
import './index.scss';
const BeautyLogoPink = require('../../assets/images/Logo/beauty_logo_pink.png');

const Home = () => {
  return (
    <div className='homepage'>
      <div className='block md:hidden mb-10 md:mb-0'>
        <img src={BeautyLogoPink} alt='' />
      </div>
      <Link to='/AI-test'>
        <div className='homepage__test-selection'>
          <div className='homepage--title'>
            <p className='jp'>AIおまかせ出題</p>
            <p className='en'>Question Al selected</p>
          </div>
          <div>
            <ScissorsIcon />
          </div>
        </div>
      </Link>
      <Link to='/subject-question'>
        <div className='homepage__test-selection'>
          <div className='homepage--title'>
            <p className='jp'>教科から選ぶ</p>
            <p className='en select'>Question by subject</p>
          </div>
          <div className='img'>
            <ShampooIcon />
          </div>
        </div>
      </Link>
      <Link to='/examination'>
        <div className='homepage__test-selection'>
          <div className='homepage--title'>
            <p className='jp'>模擬試験/小テスト</p>
            <p className='en trial'>trial examination</p>
          </div>
          <div className='img'>
            <HairDryerIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
