import React from 'react';
import { Link } from 'react-router-dom';
import ShampooIcon from '../../assets/icons/Shampoo';
import TitleCommon from '../../components/TitleCommon';
import './index.scss';
import { useQuery } from '@apollo/client';
import { GET_SUBJECTS } from 'src/services/question-ai';
import { Row, Spin } from 'antd';

interface ISubjectProps {
  id: string;
  name?: string;
}
const QuestionBySubject = () => {
  const { data: subjects, loading } = useQuery(GET_SUBJECTS);
  if (loading)
    return (
      <Row align={'middle'} justify='center'>
        <Spin />
      </Row>
    );
  return (
    <div className='question-subject'>
      <div className='hidden md:block'>
        <TitleCommon
          icon={<ShampooIcon />}
          height='90px'
          title='教科から選ぶ'
          subtitle='Question'
          type='select'
        />
      </div>
      <div className='question-subject__content'>
        <div className='question-subject__selection'>
          {subjects.subjects.map((subject: ISubjectProps, index: number) => {
            return (
              <React.Fragment key={subject.id}>
                <Link
                  to={`/AI-test/${subject.id}`}
                  className={
                    index < 4 && index > 0
                      ? 'question-subject__selection__subject special'
                      : index > 3 && index < 6
                      ? 'question-subject__selection__subject special1'
                      : 'question-subject__selection__subject'
                  }
                >
                  {subject.name}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuestionBySubject;
