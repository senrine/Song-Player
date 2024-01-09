import React from 'react'
import play from '../../assets/play-icon.svg'
import pause from '../../assets/pause-icon.svg'
import { useSelector,useDispatch } from 'react-redux'
import { toggleLecture } from '../../features/playlist'

export default function TogglePlayButton() {

    const dispatch = useDispatch()
    const playlist = useSelector(state=> state.playlist)

  return (
    <button
    onClick={() => dispatch(toggleLecture())}
    className='bg-slate-50 w-14 h-14 shadow-md rounded-full flex justify-center items-center'>
        <img src={playlist.play ? pause : play} className='w-20 h-20' alt="toggle btn" />
    </button>
  )
}
