import { useMutation, useQuery } from "@apollo/client";
import { notification } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import HairDryerIcon from "../../assets/icons/HairDryer";
import Menu from "../../assets/icons/Menu";
import Mypage from "../../assets/icons/Mypage";
import ShampooIcon from "../../assets/icons/Shampoo";
import TitleCommon from "../../components/TitleCommon";
import { LOCAL_STORAGE_KEY } from "../../constants/LOCAL_STORAGE_KEY";
import { useThemeUpdate } from "../../contexts/contexts";
import { logoutMutation } from "../../services/respository/useMutations";
import { GET_INFO } from "../../services/respository/useQueries";
import CheckAuth from "../../utils/CheckAuth";
import "./index.scss";

const BeautyLogo = require("../../assets/images/Logo/beauty_logo.png");
const SankoLogo = require("../../assets/images/Logo/sanko_logomark_mobile.png");

const Header = ({ logOut }: any) => {
  let history = useNavigate();
  const location = useLocation();
  const toggleSidebar = useThemeUpdate();
  const { data } = useQuery(GET_INFO);
  const [logout] = useMutation(logoutMutation);

  const switchTitle = (params: string) => {
    switch (params) {
      case "/examination":
        return (
          <TitleCommon
            icon={<HairDryerIcon />}
            height="60px"
            title="模擬試験/小テスト"
            subtitle="trial examination"
            type="trial"
          />
        );
      case "/subject-question":
        return (
          <TitleCommon
            icon={<ShampooIcon />}
            height="60px"
            title="教科から選ぶ"
            subtitle="Question"
            type="select"
          />
        );
      case "/mypage":
        return (
          <TitleCommon
            icon={<Mypage />}
            height="60px"
            title="マイページ"
            subtitle="My page"
          />
        );
      // case "/chat":
      //   return (
      //     <TitleCommon
      //       icon={<Chat />}
      //       height="60px"
      //       title="チャット"
      //       subtitle="Chat"
      //     />
      //   );
      default:
        break;
    }
  };

  const checkRouteNotTitle = () => {
    if (
      location.pathname === "/examination" ||
      location.pathname === "/subject-question" ||
      location.pathname === "/mypage"
    ) {
      return false;
    } else {
      return true;
    }
  };

  const checkInTest = () => {
    if (location.pathname === "/explain" || location.pathname === "/result") {
      return true;
    } else {
      return false;
    }
  };

  const onLogout = () => {
    if (data.me.id) {
      logOut(true);
      logout({
        variables: {
          accountId: data.me.id,
        },
      })
        .then((res) => {
          if (res.data.logout.loggedOut) {
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
        })
        .finally(() => logOut(false));
    }
  };

  return (
    <header
      className={`header ${CheckAuth() ? "signin" : ""} ${
        checkInTest() ? "in-test" : ""
      }`}
    >
      <div
        className={`grid grid-cols-3 gap-4 px-8 md:px-12 lg:px-14 py-4 md:pt-4`}
      >
        <div className="justify-self-start self-center">
          <img src={SankoLogo} alt="" />
        </div>
        <div className="justify-self-center self-center">
          <img
            className={`${
              location.pathname !== "/" ? "block" : "hidden md:block"
            }`}
            src={BeautyLogo}
            alt=""
          />
        </div>
        <div className="justify-self-end self-center">
          <button
            onClick={onLogout}
            className={`max-[768px]:hidden bg-white text-[#A5A072] px-4 py-2 rounded-[25px] ${
              CheckAuth() ? "" : "hidden"
            }`}
          >
            ログアウト
          </button>
          <div
            className={`menu-icon min-[768px]:hidden ${
              CheckAuth() ? "" : "hidden"
            }`}
            onClick={() => {
              toggleSidebar();
            }}
          >
            <Menu />
          </div>
        </div>
      </div>
      <div className="block md:hidden">{switchTitle(location.pathname)}</div>
    </header>
  );
};

export default Header;
