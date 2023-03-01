import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layouts";
import { LOCAL_STORAGE_KEY } from "../constants/LOCAL_STORAGE_KEY"
function PrivateRouter() {
  let token = localStorage.getItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN);
  let auth = { token };

  return auth.token ? <Layout /> : <Navigate to="/login" />;
}

export default PrivateRouter;
