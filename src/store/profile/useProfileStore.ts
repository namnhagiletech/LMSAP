/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLazyQuery } from '@apollo/client';
import { useAtom } from 'jotai';
import { GET_INFO } from 'src/services/respository/useQueries';
import { getAccessToken } from '../auth/useAuthStore';
import { profileAtom } from './profile';

export const useProfileStore = () => {
  const [profile, setProfile] = useAtom(profileAtom);
  const [getInfoUser] = useLazyQuery(GET_INFO);

  const requestGetProfile = async () => {
    try {
      const isLogin = getAccessToken();
      if (!isLogin) return;

      const profileData = await getInfoUser();

      setProfile((prev) => {
        return {
          ...prev,
          ...profileData?.data?.me,
        };
      });

      return profileData;
    } catch (error) {
      console.log({
        error,
      });
    }
  };

  return {
    profile,
    requestGetProfile,
  };
};
