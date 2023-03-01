import React from 'react'
import './index.scss'
import CardComon from '../../components/CardComon'

const ExplainQuestion = () => {
  return (
    <div className='explain'>
      <div className="explain__question">
        <h6>Q55</h6>
        <p>1～４のうち適切なもの
          を選びなさい</p>
      </div>
      <div className="explain__answer">
        <ol>
          <li>関係法規</li>
          <li>公衆衛生</li>
          <li>感染症</li>
          <li>衛生管理術</li>
        </ol>
      </div>
      <CardComon content="すべて国民は，個人として尊重される．生命，自由及び幸福追求に対する国民の権利については，
      公共の福祉に反しない限  り，立法その他の国政の上で，最大の尊重を必要とする．" />
    </div>

  )
}

export default ExplainQuestion