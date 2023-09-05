import imgRock from '../assets/images/rock1.jpg'
import imgPaper from '../assets/images/paper1.jpg'
import imgScissors from '../assets/images/scissors1.jpg'
import imgSpock from '../assets/images/spock1.jpg'
import imgLizard from '../assets/images/lizard1.jpeg'

export const rock = {
  id: 1,
  name: 'rock',
  imageURL: imgRock,
  caption: "Pretend you are a rock and can't hear him."
} as const

export const paper = {
  id: 2,
  name: 'paper',
  imageURL: imgPaper,
  caption: "Recite Starfleet bureaucracy to bore him away."
} as const

export const scissors = {
  id: 3,
  name: 'scissors',
  imageURL: imgScissors,
  caption: 'Message Sisko to send the Cardassian tailor.'
} as const

export const spock = {
  id: 5,
  name: 'spock',
  imageURL: imgSpock,
  caption: 'Advise with Spock on the situation.'
} as const

export const lizard = {
  id: 4,
  name: 'lizard',
  imageURL: imgLizard,
  caption: 'Lizard man will scare him away.'
} as const


export const playOptions = [rock, paper, scissors, spock, lizard]

export type PlayOption = typeof playOptions[number]