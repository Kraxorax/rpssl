import { PlayOption } from "./PlayOptions"

export type PlayResult = {
  results: 'win' | 'lose' | 'tie',
  player: PlayOption['id'],
  computer: PlayOption['id']
}