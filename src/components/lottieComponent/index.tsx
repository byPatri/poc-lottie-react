import React from 'react'
import Lottie from "react-lottie";


const LottieComponent = (props: any) => {
  const { isStopped, isPaused, animationData } = props
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Lottie 
        options={defaultOptions}
        height={400}
        width={400}
        isStopped={isStopped}
        isPaused={isPaused}
      />
    </div>
  );
}

export default LottieComponent;
