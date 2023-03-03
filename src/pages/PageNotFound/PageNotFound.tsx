import { useMount } from 'ahooks';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  useMount(() => {
    setTimeout(() => {
      navigate('/');
    }, 1500);
  });

  return (
    <>
      <h1 className={''}>This page is not found!</h1>
    </>
  );
};

export default PageNotFound;
