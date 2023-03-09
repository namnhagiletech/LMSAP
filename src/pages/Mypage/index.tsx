import { useQuery } from '@apollo/client';
import { Row, Spin } from 'antd';
import { useState } from 'react';
import { GET_SELF_STATISTIC, TSelfStatistic } from 'src/services/statistics';
import Down from '../../assets/icons/Down';
import LeftIcon from '../../assets/icons/Left';
import MypageIcon from '../../assets/icons/Mypage';
import TitleCommon from '../../components/TitleCommon';
import './index.scss';
import StudentSummary from './StudentSummary';

const Mypage = () => {
  const [activeTab, setActiveTab] = useState('national-exam');
  const [showFullScores, setShowFullScores] = useState(false);

  const [showHistory, setShowHistory] = useState(false);

  const { data: dataSelfStatistic, loading } = useQuery<{
    questionAiSelfStatistic: TSelfStatistic[];
  }>(GET_SELF_STATISTIC);

  const onShowHistory = () => {
    setShowHistory(!showHistory);
  };

  if (loading)
    return (
      <Row align={'middle'} justify='center'>
        <Spin />
      </Row>
    );

  return (
    <div className='mypage'>
      <div className='hidden md:block mx-[-20px] mb-6'>
        <TitleCommon icon={<MypageIcon />} title='マイページ' subtitle='My page' height='90px' />
      </div>

      {!showHistory ? (
        <StudentSummary
          dataSelfStatistic={dataSelfStatistic?.questionAiSelfStatistic}
          onShowHistory={onShowHistory}
        />
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
            onClick={onShowHistory}
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
