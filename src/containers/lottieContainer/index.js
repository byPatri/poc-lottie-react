import { useState } from 'react'
import LottieComponent from '../../components/lottieComponent'
import Button from '@material-ui/core/Button';
import './style.css'

const LottieContainer = () => {
const [isStopped, setStop] = useState(false)

const handleStop = () => setStop(!isStopped)

  return (
    <div className='container'>
      <LottieComponent isStopped={isStopped}/>
      <Button 
        variant="contained" 
        className='stop-button'
        color={isStopped? 'primary' : 'secondary'}
        onClick={handleStop}
      >
        {isStopped? 'Play' : 'Stop'}
      </Button>
    </div>
  );
}

export default LottieContainer;
