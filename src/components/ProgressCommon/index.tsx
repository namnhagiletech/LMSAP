import React from 'react';
import { Progress } from 'antd';

const ProgressCommon = ({
  percent,
  successPercent,
}: {
  percent?: number;
  successPercent?: number;
}) => {
  return (
    <Progress
      percent={percent || 0}
      strokeColor='#B4B4B5'
      trailColor='#231815'
      showInfo={false}
      success={{ percent: successPercent || 0, strokeColor: '#FF5277' }}
    />
  );
};

export default ProgressCommon;
