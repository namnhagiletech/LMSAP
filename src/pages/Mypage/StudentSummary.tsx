import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from 'chart.js';
import { useMemo } from 'react';
import { Radar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { TSelfStatistic } from 'src/services/statistics';
import { useProfileStore } from 'src/store/profile/useProfileStore';
import ButtonCommon from '../../components/ButtonCommon';
import ProgressCommon from '../../components/ProgressCommon';

import './index.scss';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type TProps = {
  dataSelfStatistic?: TSelfStatistic[];
  onShowHistory: () => void;
};

const StudentSummary = ({ dataSelfStatistic, onShowHistory }: TProps) => {
  const { profile } = useProfileStore();

  const { dataChart } = useMemo(() => {
    const dataChart = {
      labels: dataSelfStatistic?.map((subjectItem) => subjectItem.subjectName),
      datasets: [
        {
          label: 'Total Correct',
          data: dataSelfStatistic?.map((subjectItem) => subjectItem.totalCorrect),
          backgroundColor: '#DDDDDD',
          borderColor: '#DDDDDD',
          borderWidth: 1,
        },
        {
          label: 'Total Questions',
          data: dataSelfStatistic?.map((subjectItem) => subjectItem.totalQuestion),
          backgroundColor: '#A5A07200',
          borderColor: '#A5A072',
          borderWidth: 1,
        },
      ],
    };
    console.log(dataSelfStatistic);

    return {
      dataChart,
    };
  }, [dataSelfStatistic]);

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
    <>
      <div className='mypage__name'>
        <p className='flex items-center justify-center gap-3'>
          Name
          <span className='text-[28px] text-[#231815]'>{profile.fullName || profile.email}</span>
        </p>
        <hr className='border-2 border-white mt-3 mb-6 mx-auto w-2/5' />
      </div>
      <div className='mypage__chart max-w-[370px] m-auto'>
        <p className='text-[#A5A072] text-center mb-4'>科目別評価</p>
        <Radar options={options} data={dataChart} />
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
            {dataSelfStatistic?.map((subjectItem) => {
              return (
                <tr key={subjectItem.subjectId}>
                  <td>{subjectItem.subjectName}</td>
                  <td
                    className={
                      subjectItem.rank === 'A' || subjectItem.rank === 'S'
                        ? 'text-[#FF5277]'
                        : 'text-[#231815]'
                    }
                  >
                    {subjectItem.rank}
                  </td>
                  <td>
                    <ProgressCommon
                      percent={(subjectItem.totalInCorrect / subjectItem.totalQuestion) * 100}
                      successPercent={(subjectItem.totalCorrect / subjectItem.totalQuestion) * 100}
                    />
                  </td>
                </tr>
              );
            })}
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
        <div className='w-auto sm:w-[350px] m-auto' onClick={onShowHistory}>
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
            to='/AI-test'
            className='inline-block mt-5 px-10 py-3 bg-[#FFE2D7] rounded-3xl border-2 border-[#FFFCF8] shadow-[3px_3px_5px_rgba(1,1,1,0.3)]'
          >
            小テストを受ける!
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentSummary;
