import HomePageIcon from "../assets/icons/Homepage";
import ExaminationIcon from "../assets/icons/Examination";
import BookmarkIcon from "../assets/icons/Bookmark";
import MyPageIcon from "../assets/icons/Mypage";
import ChatIcon from "../assets/icons/Chat";

export const MENU = [
  {
    name: "ホーム",
    img: <HomePageIcon />,
    path: "/",
  },
  {
    name: "眼 テス",
    img: <ExaminationIcon />,
    path: "/examination",
  },
  {
    name: "トブックマーク",
    img: <BookmarkIcon />,
    path: "/",
  },
  {
    name: "マイページ",
    img: <MyPageIcon />,
    path: "/mypage",
  },
  // {
  //   name: 'チャット',
  //   img: <ChatIcon />,
  //   path: '/chat'
  // }
];
