import axios from "axios"
import { PlayResult } from "../models/APIResponse"

export const postPlay = async (playId: number): Promise<PlayResult> => {
  return await axios({
    method: 'post',
    url: ' https://codechallenge.boohma.com/play',
    data: { player: playId }
  }).then(response => response.data)
}