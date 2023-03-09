import { useMutation } from '@apollo/client';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuthStore } from 'src/store/auth/useAuthStore';
import { useNavbar } from 'src/store/navbar/useNavbarStore';
import { useProfileStore } from 'src/store/profile/useProfileStore';
import ArrowRight from '../../assets/icons/ArrowRight';
import { MENU } from '../../constants/COMMON_CONSTANTS';
import usePrevious from '../../hooks/usePrevious';
import { logoutMutation } from '../../services/respository/useMutations';
import './index.scss';

interface Menu {
  name: string;
  img: JSX.Element;
  path: string;
}

const Sidernav = () => {
  let history = useNavigate();
  const { pathname } = useLocation();
  const { showNavbar, onVisibleNavbar } = useNavbar();
  const [currentPath, setCurrentPath] = useState<string>();
  const [logout] = useMutation(logoutMutation);
  const oldPath = usePrevious(currentPath);
  const { profile } = useProfileStore();

  const { onLogout: logoutLocalstore } = useAuthStore();

  useEffect(() => {
    setCurrentPath(pathname);
    if (showNavbar && oldPath !== currentPath) {
      onVisibleNavbar();
    }
  }, [pathname, currentPath, oldPath, showNavbar, onVisibleNavbar]);

  const onLogout = () => {
    if (profile.id) {
      logout({
        variables: {
          accountId: profile.id,
        },
      })
        .then((res) => {
          if (res.data.logout.loggedOut) {
            onVisibleNavbar();
            logoutLocalstore();
            history('/login');
          }
        })
        .catch((error) => {
          notification.error({
            message: '',
            description: 'Logout unsuccessful',
            placement: 'topRight',
          });
        });
    }
  };

  return (
    <nav className={`sider ${showNavbar ? 'translate-x-0' : ' translate-x-full'}`}>
      <div className='flex justify-end mt-4 mr-4' onClick={onVisibleNavbar}>
        <ArrowRight />
      </div>
      <ul>
        {MENU.map((el: Menu) => (
          <li key={el.name}>
            <Link className='flex justify-start gap-5 items-center' to={el.path}>
              <div>{el.img}</div>
              <span>{el.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className='logout' onClick={onLogout}>
        ログアウト
      </p>
    </nav>
  );
};

export default Sidernav;
