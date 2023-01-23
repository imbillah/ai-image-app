import React from "react";
import { Watch } from "react-loader-spinner";
const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="teal"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
