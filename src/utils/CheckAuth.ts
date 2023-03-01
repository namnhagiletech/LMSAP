import { LOCAL_STORAGE_KEY } from "../constants/LOCAL_STORAGE_KEY";

const CheckAuth = () => {
  let token: string | null = localStorage.getItem(
    LOCAL_STORAGE_KEY.ACCESS_TOKEN
  );
  return token ? true : false;
};

export default CheckAuth;
