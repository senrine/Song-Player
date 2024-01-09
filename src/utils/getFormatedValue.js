export function getFormatedValue(val){
    let currentMin = Math.trunc(val/60)
    let currentSec = Math.trunc(val%60)

    if(currentSec < 10){
      currentSec = `0${currentSec}`
    }

    return `${currentMin}:${currentSec}`
  }