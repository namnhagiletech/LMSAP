import { getAccessToken } from 'src/store/auth/useAuthStore';

const CheckAuth = () => {
  let token: string | null = getAccessToken();
  return token ? true : false;
};

export default CheckAuth;
