import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'src/routes/route.constant';
import { useProfileStore } from '../profile/useProfileStore';
// import { useProfileStore } from '../profile/useProfileStore';

export const LOCAL_STORAGE_KEY = 'LMS_APP';

interface IAuth {
  accessToken: string;
  refreshToken: string;
  // role: string;
}

export const getAuthLocalStorage = () => {
  try {
    const authData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return authData && JSON.parse(authData);
  } catch (error) {}
};

export const getAccessToken = () => {
  const data: any = getAuthLocalStorage();

  return data?.accessToken || '';
};

export const getRefreshToken = () => {
  const data: any = getAuthLocalStorage();

  return data?.refreshToken || '';
};

export const getRoleAccount = () => {
  const data: any = getAuthLocalStorage();

  return data?.role || '';
};

export const setAuthData = (data: IAuth): void => {
  localStorage.setItem(LOCAL_STORAGE_KEY as string, JSON.stringify(data));
};

export const deleteAuthData = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export const useAuthStore = () => {
  const navigate = useNavigate();
  const { requestGetProfile } = useProfileStore();

  const onLogout = async () => {
    try {
      deleteAuthData();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const onLogin = async (data: IAuth) => {
    try {
      setAuthData(data);

      await requestGetProfile();

      navigate(ROUTE_PATH.HOME);
    } catch (error) {}
  };

  return {
    onLogin,
    onLogout,
  };
};
