import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATH } from './route.constant';
import React, { Suspense } from 'react';

import PageNotFound from 'src/pages/PageNotFound/PageNotFound';
import AppLayout from 'src/layouts/AppLayout/AppLayout';
import AuthLayout from 'src/layouts/AuthLayout/AuthLayout';
import MainLayout from 'src/layouts/MainLayout/MainLayout';

const ChangePassword = React.lazy(() => import('src/pages/ChangePassword/ChangePassword'));
const ConfirmEmail = React.lazy(() => import('src/pages/Login/ConfirmEmail'));
const ConfirmCode = React.lazy(() => import('src/pages/Login/ConfirmCode'));
const Homepage = React.lazy(() => import('src/pages/Home'));
const QuestionBySubject = React.lazy(() => import('src/pages/QuestionBySubject'));
const Examination = React.lazy(() => import('src/pages/Examination'));
const QuestionTest = React.lazy(() => import('src/pages/QuestionTest'));
const Chat = React.lazy(() => import('src/pages/Chat'));
const ExplainQuestion = React.lazy(() => import('src/pages/ExplainQuestion'));
const Mypage = React.lazy(() => import('src/pages/Mypage'));
const ResultExamination = React.lazy(() => import('src/pages/ResultExamination'));
const Login = React.lazy(() => import('src/pages/Login/Login'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTE_PATH.LOGIN,
            element: (
              <Suspense fallback={null}>
                <Login />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CONFIRM_EMAIL,
            element: (
              <Suspense fallback={null}>
                <ConfirmEmail />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CONFIRM_CODE,
            element: (
              <Suspense fallback={null}>
                <ConfirmCode />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.HOME,
            element: (
              <Suspense fallback={null}>
                <Homepage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.SUBJECT_QUESTION,
            element: (
              <Suspense fallback={null}>
                <QuestionBySubject />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.EXAMINATION,
            element: (
              <Suspense fallback={null}>
                <Examination />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.AI_TEST,
            element: (
              <Suspense fallback={null}>
                <QuestionTest />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CHAT,
            element: (
              <Suspense fallback={null}>
                <Chat />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.EXPLAIN,
            element: (
              <Suspense fallback={null}>
                <ExplainQuestion />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.MY_PAGE,
            element: (
              <Suspense fallback={null}>
                <Mypage />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.RESULT,
            element: (
              <Suspense fallback={null}>
                <ResultExamination />
              </Suspense>
            ),
          },
          {
            path: ROUTE_PATH.CHANGE_PASSWORD,
            element: (
              <Suspense fallback={null}>
                <ChangePassword />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
