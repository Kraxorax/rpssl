import Grid from '@mui/material/Grid'
import imgQ from '../assets/images/Q.webp'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import { PlayOption, playOptions } from '../models/PlayOptions'
import { useState } from 'react'
import { take } from 'lodash'
import { postPlay } from '../api/Play'
import { Scoreboard } from '../components/Scoreboard'
import { PlayResult } from '../models/APIResponse'
import { playClearScores, playLose, playStart, playWin } from '../media/Audio'
import { ResultModal } from '../components/ResultModal'


export const RPSSL = () => {
  const theme = useTheme()
  const [caption, setCaption] = useState('Take action!')
  const [scores, setScores] = useState<PlayResult['results'][]>([])
  const [activePlay, setActivePlay] = useState<PlayResult | null>(null)

  const onPlay = async (play: PlayOption) => {
    const resolvedPlay = await postPlay(play.id)
    if (resolvedPlay.results === 'win') {
      playWin()
    } else {
      playLose()
    }
    setScores(scores => take([resolvedPlay.results, ...scores], 10))
    setActivePlay(resolvedPlay)
  }

  const onPlayAgain = () => {
    setActivePlay(null)
    playStart()
  }

  const clearScores = async () => {
    playClearScores()
    setScores([])
  }

  return (
    <Grid container>
      <Grid item container md={7}>
        <Grid item xs={12} sx={theme.theTheme.centered}>
          <Typography variant='h3'>Captain! Q's at it again!</Typography>
        </Grid>
        <Grid item sx={theme.theTheme.centered}>
          <Typography variant='h6'>What are the orders, captian?</Typography>
        </Grid>
        <Grid item container gap={'1em'} justifyContent={'center'}>
          {playOptions.map(play =>
            <Grid item key={play.name} md={2} sx={theme.theTheme.playOption}
              onMouseOver={() => setCaption(play.caption)}
              onClick={() => onPlay(play)}>
              <img src={play.imageURL} style={{ maxWidth: '100%' }} />
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>
            {caption}
          </Typography>
        </Grid>
        <Scoreboard scores={scores} clearScores={clearScores} />
      </Grid>
      <Grid item md={5}>
        <img src={imgQ} style={{ maxWidth: '100%' }} />
      </Grid>
      {
        activePlay &&
        <ResultModal result={activePlay} onClose={onPlayAgain} />
      }
    </Grid >
  )
}