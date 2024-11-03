import React from 'react'
import { InfinitySpin } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-nude1">
    <InfinitySpin
      visible={true}
      width="200"
      color="#B08968"
      ariaLabel="infinity-spin-loading"
    />{" "}
  </div>
  )
}

export default LoadingSpinner;
