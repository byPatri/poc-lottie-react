import Lottie from "react-lottie";
import animationData from "../../animations/42330-christmas-toggle.json";

const LottieComponent = (props) => {
    const { isStopped } = props
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
      />
    </div>
  );
}

export default LottieComponent;
