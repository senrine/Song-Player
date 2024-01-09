import React from 'react'
import { useSelector } from 'react-redux'
import { getFormatedValue } from '../../utils/getFormatedValue'

export default function Progress() {

    const progressData = useSelector(state => state.progress)

    function handleProgressClick(e){
      const player = document.getElementById("audio-player")
      const rect = e.target.getBoundingClientRect()
      const width = rect.width
      const x  = e.clientX - rect.left
      player.currentTime = (x / width) * progressData.totalDuration
    }

  return (
    <div className='max-w-[800px] mx-auto'>
        <div
        onClick={handleProgressClick}
        className='overflow-hidden bg-slate-900 h-2 rounded cursor-pointer'>
            <div
            style={{transform: `scaleX(${progressData.current / progressData.totalDuration})`}}
            className='origin-left bg-indigo-400 scale-x-50 h-full pointer-events-none'></div>
        </div>
        <div className='flex justify-between'>
            <span>{getFormatedValue(progressData.current)}</span>
            <span>{getFormatedValue(progressData.totalDuration)}</span>

        </div>
    </div>
  )
}
