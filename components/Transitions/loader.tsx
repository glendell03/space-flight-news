import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader type="TailSpin" height={100} width={100} color="black" />
    </div>
  );
};

export default Loading;
