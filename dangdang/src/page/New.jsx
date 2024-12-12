import React from 'react';
import { Outlet } from "react-router-dom";

const New = () => {
  return (
    <>
      <h4>New Page</h4>
      <Outlet/>
    </>
  );
};

export default New;