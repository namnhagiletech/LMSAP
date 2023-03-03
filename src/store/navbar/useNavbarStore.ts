import { atom, useAtom } from 'jotai';

const navbarAtom = atom(false);

export const useNavbar = () => {
  const [showNavbar, setShowNavbar] = useAtom(navbarAtom);

  const onVisibleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return {
    showNavbar,
    onVisibleNavbar,
  };
};
