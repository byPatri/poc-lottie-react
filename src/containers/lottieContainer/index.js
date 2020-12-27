import { useState } from 'react'
import LottieComponent from '../../components/lottieComponent'
import { IconButton } from '@material-ui/core';
import { Pause, PlayCircleFilled, Stop } from '@material-ui/icons';
import './style.css'

const LottieContainer = () => {
const [isStopped, setStop] = useState(false)
const [isPaused, setPaused] = useState(false)

  return (
    <div className='container'>
      <LottieComponent 
        isStopped={isStopped}
        isPaused={isPaused}
      />
      <IconButton 
        aria-label='play'
        color={isStopped || isPaused ? 'primary' : 'default'}
        className='button'
        onClick={() => isStopped ? setStop(false) : setPaused(false)}
      >
        <PlayCircleFilled />
      </IconButton>
      <IconButton 
        aria-label='pause'
        color={isStopped || isPaused ? 'default' : 'primary'}
        className='button'
        onClick={() => setPaused(true)}
      >
        <Pause />
      </IconButton>
      <IconButton 
        aria-label='stop'
        color={isStopped || isPaused ? 'default' : 'secondary'}
        className='button'
        onClick={() => setStop(true)}
      >
        <Stop />
      </IconButton>
    </div>
  );
}

export default LottieContainer;
