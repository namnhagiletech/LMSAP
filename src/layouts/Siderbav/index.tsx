import React, { useState, useEffect } from "react";
import "./index.scss";
import { MENU } from "../../constants/COMMON_CONSTANTS";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/icons/ArrowRight";
import { useTheme, useThemeUpdate } from "../../contexts/contexts";
import { notification } from "antd";
import { useLocation, useNavigate } from "react-router";
import { LOCAL_STORAGE_KEY } from "../../constants/LOCAL_STORAGE_KEY";
import { useMutation, useQuery } from "@apollo/client";
import { logoutMutation } from "../../services/respository/useMutations";
import { GET_INFO } from "../../services/respository/useQueries";
import usePrevious from "../../hooks/usePrevious";

interface Menu {
  name: string;
  img: JSX.Element;
  path: string;
}

const Sidernav = () => {
  let history = useNavigate();
  const { pathname } = useLocation();
  const isShowSidebar = useTheme();
  const toggleSidebar = useThemeUpdate();
  const [currentPath, setCurrentPath] = useState<string>();
  const { data } = useQuery(GET_INFO);
  const [logout] = useMutation(logoutMutation);
  const oldPath = usePrevious(currentPath);

  useEffect(() => {
    setCurrentPath(pathname);
    if (isShowSidebar && oldPath !== currentPath) {
      toggleSidebar();
    }
  }, [pathname, currentPath, oldPath, toggleSidebar, isShowSidebar]);

  const onLogout = () => {
    if (data.me.id) {
      logout({
        variables: {
          accountId: data.me.id,
        },
      })
        .then((res) => {
          if (res.data.logout.loggedOut) {
            toggleSidebar();
            localStorage.removeItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
            localStorage.removeItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN);
            history("/login");
          }
        })
        .catch((error) => {
          notification.error({
            message: "",
            description: "Logout unsuccessful",
            placement: "topRight",
          });
        });
    }
  };

  return (
    <nav
      className={`sider ${
        isShowSidebar ? "translate-x-0" : " translate-x-full"
      }`}
    >
      <div className="flex justify-end mt-4 mr-4" onClick={toggleSidebar}>
        <ArrowRight />
      </div>
      <ul>
        {MENU.map((el: Menu) => (
          <li key={el.name}>
            <Link
              className="flex justify-start gap-5 items-center"
              to={el.path}
            >
              <div>{el.img}</div>
              <span>{el.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="logout" onClick={onLogout}>
        ログアウト
      </p>
    </nav>
  );
};

export default Sidernav;
