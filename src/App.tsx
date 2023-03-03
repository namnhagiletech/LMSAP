import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts';
import Examination from './pages/Examination';
import ExplainQuestion from './pages/ExplainQuestion';
import Homepage from './pages/Home';
import ChangePassword from './pages/Login/ChangePassword';
import ConfirmCode from './pages/Login/ConfirmCode';
import ConfirmEmail from './pages/Login/ConfirmEmail';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage';
import QuestionBySubject from './pages/QuestionBySubject';
import QuestionTest from './pages/QuestionTest';
import ResultExamination from './pages/ResultExamination';
import PrivateRouter from './utils/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route element={<Homepage />} path='/' />
            <Route element={<QuestionBySubject />} path='/subject-question' />
            <Route element={<Examination />} path='/examination' />
            <Route element={<QuestionTest />} path='/AI-test' />
            {/* <Route element={<Chat />} path="/chat" /> */}
            <Route element={<ExplainQuestion />} path='/explain' />
            <Route element={<Mypage />} path='/mypage' />
            <Route element={<ResultExamination />} path='result' />
          </Route>
          <Route element={<Layout />}>
            <Route element={<Login />} path='/login' />
            <Route element={<ChangePassword />} path='/change-password' />
            <Route element={<ConfirmEmail />} path='/confirm-email' />
            <Route element={<ConfirmCode />} path='/confirm-code' />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
