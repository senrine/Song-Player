import React from 'react'
import prevIcon from '../../assets/prev-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { prevSong } from '../../features/playlist'

export default function PreviousButton() {
  
  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playlist)
  
  function handleClick(){
    if(playlist.songs) {
      const nextIndex = playlist.songs.findIndex(song => song.id === playlist.currentMusicId) -1
      dispatch(prevSong(nextIndex))
    }
  }
  return (
    <button
    onClick={handleClick}
    className='w-9 h-9 rounded-full mr-4 bg-slate-400 flex justify-center items-center'>
        <img src={prevIcon}  className="w-5  h-5" alt="prev btn" />
    </button>
  )
}
