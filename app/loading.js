import React from "react";
import Spinner from "./_components/Spinner";

const Loading = () => {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-primary-200 text-xl">Loading...</p>
    </div>
  );
};

export default Loading;
