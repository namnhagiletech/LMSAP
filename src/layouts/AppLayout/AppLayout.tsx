/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMount } from 'ahooks';
import { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'src/routes/route.constant';
import { getAccessToken } from 'src/store/auth/useAuthStore';
import { useProfileStore } from 'src/store/profile/useProfileStore';

const AppLayout = () => {
  const navigate = useNavigate();
  const { requestGetProfile } = useProfileStore();

  useMount(() => {
    requestGetProfile();
  });

  useMount(() => {
    const isLogin = getAccessToken();

    if (!isLogin) return navigate(ROUTE_PATH.LOGIN);
  });

  return (
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  );
};

export default AppLayout;
