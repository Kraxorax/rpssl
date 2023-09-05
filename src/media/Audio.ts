import soundClearScores from '../assets/sounds/clear_scoreboard.mp3'
import soundStart_1 from '../assets/sounds/start_1.mp3'
import soundStart_2 from '../assets/sounds/start_2.mp3'
import soundStart_3 from '../assets/sounds/start_3.mp3'
import soundStart_4 from '../assets/sounds/start_4.wav'
import soundWin_1 from '../assets/sounds/win_1.mp3'
import soundWin_2 from '../assets/sounds/win_2.mp3'
import soundWin_3 from '../assets/sounds/win_3.wav'
import soundWin_4 from '../assets/sounds/win_4.wav'
import soundLose_1 from '../assets/sounds/lose_1.mp3'
import soundLose_2 from '../assets/sounds/lose_2.mp3'
import soundLose_3 from '../assets/sounds/lose_3.mp3'
import soundLose_4 from '../assets/sounds/lose_4.wav'
import { getRandomNumberZeroToThree } from '../api/Random'



const audioStart = [
  new Audio(soundStart_1),
  new Audio(soundStart_2),
  new Audio(soundStart_3),
  new Audio(soundStart_4)
]

const audioWin = [
  new Audio(soundWin_1),
  new Audio(soundWin_2),
  new Audio(soundWin_3),
  new Audio(soundWin_4)
]

const audioLose = [
  new Audio(soundLose_1),
  new Audio(soundLose_2),
  new Audio(soundLose_3),
  new Audio(soundLose_4)
]

const audioClearScores = new Audio(soundClearScores)

export const playStart = async () => {
  const random = await getRandomNumberZeroToThree()
  audioStart[random].play()
}


export const playWin = async () => {
  const random = await getRandomNumberZeroToThree()
  audioWin[random].play()
}


export const playLose = async () => {
  const random = await getRandomNumberZeroToThree()
  audioLose[random].play()
}

export const playClearScores = () => {
  audioClearScores.play()
}
