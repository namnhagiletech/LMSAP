import React, { useState } from 'react';
import './index.scss';
import ProgressCommon from '../../components/ProgressCommon';
import ButtonCommon from '../../components/ButtonCommon';
import TitleCommon from '../../components/TitleCommon';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Down from '../../assets/icons/Down';
import LeftIcon from '../../assets/icons/Left';
import MypageIcon from '../../assets/icons/Mypage';

const Mypage = () => {
  const [isShowTrial, setIsShowTrial] = useState(true);
  const [activeTab, setActiveTab] = useState('national-exam');
  const [showFullScores, setShowFullScores] = useState(false);

  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  const data = {
    labels: [
      '関係法規・制度',
      '衛生管理/　公衆衛生・環境衛生',
      '衛生管理/　感染症',
      '衛生管理/　衛生管理技術',
      '保健/　人体の構造及び機能',
      '皮膚科学',
      // '香粧品化学',
      '文化論',
      '運営管理',
      '美容技術理論',
    ],
    datasets: [
      {
        label: 'Rank A',
        data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
        fill: true,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderColor: 'gray',
        pointBackgroundColor: 'gray',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'gray',
      },
      {
        label: 'Your Right Answer',
        data: [28, 48, 40, 19, 96, 27, 100, 37, 69, 23],
        fill: true,
        backgroundColor: 'rgba(35, 24, 21, 0.2)',
        borderColor: 'rgba(35, 24, 21, 0.2)',
        pointBackgroundColor: 'rgba(35, 24, 21, 0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(35, 24, 21, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        color: '#fff',
        suggestedMin: 50,
        suggestedMax: 100,
        pointLabels: {
          font: {
            size: 8,
          },
          color: '#A5A072',
        },
      },
    },
  };

  return (
    <div className='mypage'>
      <div className='hidden md:block mx-[-20px] mb-6'>
        <TitleCommon icon={<MypageIcon />} title='マイページ' subtitle='My page' height='90px' />
      </div>
      {isShowTrial ? (
        <>
          <div className='mypage__name'>
            <p className='flex items-center justify-center gap-3'>
              Name<span className='text-[28px] text-[#231815]'>白鳥 麗子</span>
            </p>
            <hr className='border-2 border-white mt-3 mb-6 mx-auto w-2/5' />
          </div>
          <div className='mypage__chart max-w-[370px] m-auto'>
            <p className='text-[#A5A072] text-center mb-4'>科目別評価</p>
            <Radar options={options} data={data} />
          </div>
          <div className='mypage__subjects'>
            <table className='table-layout'>
              <colgroup>
                <col span={1} style={{ width: '145px' }} />
                <col span={1} style={{ width: '38px' }} />
                <col span={1} style={{ width: '182px' }} />
              </colgroup>
              <thead>
                <tr>
                  <th className='font-bold'>
                    <span className='text-[14px] text-[#111] opacity-100  special'>SUBJECT</span>
                  </th>
                  <th className='text-[7px] whitespace-nowrap'>ランク</th>
                  <th>
                    <p className='flex items-center justify-between'>
                      <span className="relative before:content-[''] before:w-4 whitespace-nowrap before:h-[2px] before:bg-[#FF5277] before:block before:absolute before:-left-5 before:top-[50%] before:rounded text-[7px] text-[#FF5277] ml-5">
                        習得済
                      </span>
                      <span className="relative before:content-[''] before:w-4 whitespace-nowrap before:h-[2px] before:bg-[#B4B4B5] before:block before:absolute before:-left-5 before:top-[50%] before:rounded text-[7px] text-[#B4B4B5] ml-5">
                        未習得
                      </span>
                      <span className="relative before:content-[''] before:w-4 whitespace-nowrap before:h-[2px] before:bg-[#231815] before:block before:absolute before:-left-5 before:top-[50%] before:rounded text-[7px] text-[#231815] ml-5 text-right">
                        未出題
                      </span>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2}></td>
                  <td>
                    <p className='flex items-center justify-between'>
                      <span className='text-[#A5A072] text-[10px]'>0</span>
                      <span className='text-[#A5A072] text-[10px]'>50</span>
                      <span className='text-[#A5A072] text-[10px]'>100%</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>関係法規・制度</td>
                  <td className='text-[#FF5277]'>A</td>
                  <td>
                    <ProgressCommon percent={80} successPercent={50} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 公衆衛生・環境衛生</td>
                  <td>D</td>
                  <td>
                    <ProgressCommon percent={80} successPercent={50} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td>D</td>
                  <td>
                    <ProgressCommon percent={100} successPercent={80} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td>A</td>
                  <td>
                    <ProgressCommon percent={50} successPercent={80} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td>A</td>
                  <td>
                    <ProgressCommon percent={80} successPercent={100} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td>C</td>
                  <td>
                    <ProgressCommon percent={60} successPercent={80} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td className='text-[#FF5277]'>C</td>
                  <td>
                    <ProgressCommon percent={80} successPercent={50} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td>B</td>
                  <td>
                    <ProgressCommon percent={72} successPercent={90} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td>A</td>
                  <td>
                    <ProgressCommon percent={60} successPercent={70} />
                  </td>
                </tr>
                <tr>
                  <td>衛生管理 / 感染症</td>
                  <td className='text-[#FF5277]'>C</td>
                  <td>
                    <ProgressCommon />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mypage__newest'>
            <h3 className='text-[#A5A072] mb-3 text-center'>最新の試験結果</h3>
            <table className='table-layout'>
              <colgroup>
                <col span={1} style={{ width: '115px' }} />
                <col span={1} style={{ width: '100px' }} />
                <col span={1} style={{ width: '135px' }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>全国統一模試</td>
                  <td>
                    <p className='text-[#231815] font-bold'>
                      7<span className='text-[#A5A072] text-[7px] ml-2'>点/10</span>
                    </p>
                  </td>
                  <td>2022/04/11</td>
                </tr>
                <tr>
                  <td>セルフ模試</td>
                  <td>
                    <p className='text-[#231815] font-bold'>
                      90
                      <span className='text-[#A5A072] text-[7px] ml-2'>点/110</span>
                    </p>
                  </td>
                  <td>2022/04/11</td>
                </tr>
                <tr>
                  <td>小テスト</td>
                  <td>
                    <p className='text-[#231815] font-bold'>
                      18
                      <span className='text-[#A5A072] text-[7px] ml-2'>点/20</span>
                    </p>
                  </td>
                  <td>2022/04/11</td>
                </tr>
              </tbody>
            </table>
            <div
              className='w-auto sm:w-[350px] m-auto'
              onClick={() => setIsShowTrial(!isShowTrial)}
            >
              <ButtonCommon title='過去のテスト結果' type='button milk special-semi-brown shadow' />
            </div>
          </div>
          <div className='mt-12 pb-24'>
            <h3 className='text-[#A5A072] mb-3 text-center'>推奨科目</h3>
            <div className='w-full max-w-[360px] bg-[#fff] text-center rounded-lg m-auto px-10 py-8'>
              <h3 className='text-[#231815]'>関係法規・制度</h3>
              <hr className='border-2 border-[#A5A072] rounded my-3' />
              <p className='text-[#A5A072] text-[12px]'>をもう少し頑張ろう！</p>
              <Link
                to='/'
                className='inline-block mt-5 px-10 py-3 bg-[#FFE2D7] rounded-3xl border-2 border-[#FFFCF8] shadow-[3px_3px_5px_rgba(1,1,1,0.3)]'
              >
                小テストを受ける!
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className='mypage__statistical max-w-[360px] m-auto'>
          <ul>
            <li
              onClick={() => setActiveTab('national-exam')}
              className={activeTab === 'national-exam' ? 'active national-exam' : ''}
            >
              全国統一模試
            </li>
            <li
              onClick={() => setActiveTab('trial-exam')}
              className={activeTab === 'trial-exam' ? 'active trial-exam' : ''}
            >
              ランダム模試
            </li>
            <li
              onClick={() => setActiveTab('mini-test')}
              className={activeTab === 'mini-test' ? 'active mini-test' : ''}
            >
              小テスト
            </li>
          </ul>
          <div
            className={`mypage__statistical--tab  ${activeTab === 'national-exam' ? 'active' : ''}`}
          >
            <table>
              <thead>
                <tr>
                  <th className={activeTab === 'national-exam' ? 'national-exam-bg' : ''}>
                    受験日
                  </th>
                  <th className={activeTab === 'national-exam' ? 'national-exam-bg' : ''}>
                    全国ランキング
                  </th>
                  <th className={activeTab === 'national-exam' ? 'national-exam-bg' : ''}>得点</th>
                  <th className={activeTab === 'national-exam' ? 'national-exam-bg' : ''}>
                    教科別得点
                  </th>
                  <th className={activeTab === 'national-exam' ? 'national-exam-bg' : ''}>
                    合否結果
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white'>
                  <td>22/05/20</td>
                  <td>100/500人</td>
                  <td>100/110点合格</td>
                  <td>
                    <span onClick={() => setShowFullScores(!showFullScores)}>
                      <Down
                        className={`cursor-pointer m-auto ${
                          showFullScores ? '' : 'rotate-[-90deg]'
                        }`}
                      />
                    </span>
                  </td>
                  <td>合格</td>
                </tr>
                <tr className={`bg-white special ${showFullScores ? 'h-auto' : 'hidden'}`}>
                  <td colSpan={2}></td>
                  <td colSpan={3}>
                    <div className='statistical flex items-center justify-around'>
                      <div className='statistical-child text-left'>
                        <p>教科名</p>
                        <p className='failed'>関係法規・制度</p>
                        <p>公衆衛生・環境衛生</p>
                        <p>感染症</p>
                        <p>衛生管理技術</p>
                        <p>人体の構造及び機能</p>
                        <p>皮膚科学</p>
                        <p>香粧品化学</p>
                        <p>文化論</p>
                        <p>運営管理</p>
                        <p>美容技術理論</p>
                      </div>
                      <div className='statistical-child text-right'>
                        <p>10 / 10点</p>
                        <p className='failed'>0 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='bg-[#f7f7f7]'>
                  <td>22/05/20</td>
                  <td>100/500人</td>
                  <td>100/110点合格</td>
                  <td>
                    <span onClick={() => setShowFullScores(!showFullScores)}>
                      <Down
                        className={`cursor-pointer m-auto ${
                          showFullScores ? '' : 'rotate-[-90deg]'
                        }`}
                      />
                    </span>
                  </td>
                  <td>合格</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className={`mypage__statistical--tab  ${activeTab === 'trial-exam' ? 'active' : ''}`}
          >
            <table>
              <thead>
                <tr>
                  <th className={activeTab === 'trial-exam' ? 'trial-exam-bg' : ''}>受験日</th>
                  <th className={activeTab === 'trial-exam' ? 'trial-exam-bg' : ''}>得点</th>
                  <th className={activeTab === 'trial-exam' ? 'trial-exam-bg' : ''}>教科別得点</th>
                  <th className={activeTab === 'trial-exam' ? 'trial-exam-bg' : ''}>合否結果</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white'>
                  <td>22/05/20</td>
                  <td>100/110点合格</td>
                  <td>
                    <span onClick={() => setShowFullScores(!showFullScores)}>
                      <Down
                        className={`cursor-pointer m-auto ${
                          showFullScores ? '' : 'rotate-[-90deg]'
                        }`}
                      />
                    </span>
                  </td>
                  <td>合格</td>
                </tr>
                <tr className={`bg-white ${showFullScores ? 'h-auto' : 'hidden'}`}>
                  <td></td>
                  <td colSpan={3}>
                    <div className='statistical flex items-center justify-around'>
                      <div className='statistical-child text-left'>
                        <p>教科名</p>
                        <p className='failed'>関係法規・制度</p>
                        <p>公衆衛生・環境衛生</p>
                        <p>感染症</p>
                        <p>衛生管理技術</p>
                        <p>人体の構造及び機能</p>
                        <p>皮膚科学</p>
                        <p>香粧品化学</p>
                        <p>文化論</p>
                        <p>運営管理</p>
                        <p>美容技術理論</p>
                      </div>
                      <div className='statistical-child text-right'>
                        <p>10 / 10点</p>
                        <p className='failed'>0 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                        <p>10 / 10点</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='bg-[#f7f7f7]'>
                  <td>22/05/20</td>
                  <td>100/110点合格</td>
                  <td>
                    <span onClick={() => setShowFullScores(!showFullScores)}>
                      <Down
                        className={`cursor-pointer m-auto ${
                          showFullScores ? '' : 'rotate-[-90deg]'
                        }`}
                      />
                    </span>
                  </td>
                  <td>合格</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={`mypage__statistical--tab  ${activeTab === 'mini-test' ? 'active' : ''}`}>
            <table>
              <thead>
                <tr>
                  <th className={activeTab === 'mini-test' ? 'mini-test-bg' : ''}>受験日</th>
                  <th className={activeTab === 'mini-test' ? 'mini-test-bg' : ''}>得点</th>
                </tr>
              </thead>
              <tbody>
                <tr className='bg-white'>
                  <td>22/05/20</td>
                  <td>8 / 10点</td>
                </tr>
                <tr className='bg-[#f7f7f7]'>
                  <td>22/05/20</td>
                  <td>8 / 10点</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p
            onClick={() => setIsShowTrial(!isShowTrial)}
            className='text-black flex items-center justify-center gap-2 mt-10 cursor-pointer'
          >
            <LeftIcon /> <span>戻る</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Mypage;
