import React from 'react'
import nextIcon from '../../assets/next-icon.svg'
import { useSelector, useDispatch } from 'react-redux'
import { nextSong } from '../../features/playlist'


export default function NextButton() {

  const dispatch = useDispatch()
  const playlist = useSelector(state => state.playlist)
  
  function handleClick(){
    if(playlist.songs) {
      const nextIndex = playlist.songs.findIndex(song => song.id === playlist.currentMusicId) +1
      dispatch(nextSong(nextIndex))
    }
  }

  return (
    <button
    onClick={handleClick}
    className='w-9 h-9 rounded-full ml-4 bg-slate-400 flex justify-center items-center'>
        <img src={nextIcon}  className="w-5  h-5" alt="next btn" />
    </button>
  )
}
