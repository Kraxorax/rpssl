import Grid from '@mui/material/Grid'
import imgQ from '../assets/images/Q.webp'
import Typography from '@mui/material/Typography'
import { Button, useTheme } from '@mui/material'
import { PlayOption, playOptions } from '../models/PlayOptions'
import { useState } from 'react'
import { take } from 'lodash'
import { postPlay } from '../api/Play'


export const RPSSL = () => {
  const theme = useTheme()
  const [caption, setCaption] = useState('Take action!')
  const [scores, setScores] = useState<string[]>([])

  const onPlay = async (play: PlayOption) => {
    const resolvedPlay = await postPlay(play.id)
    console.log(resolvedPlay)
    setScores(scores => take([resolvedPlay.results, ...scores], 10))
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
            <Grid md={2} sx={theme.theTheme.playOption}
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
        <Grid item container columns={10}>
          <Grid xs={10}>
            <Typography>Scoreboard:</Typography>
          </Grid>
          {scores.map((score, idx) => {
            const color = score === 'win'
              ? theme.theTheme.resultWin
              : score === 'lose'
                ? theme.theTheme.resultLose
                : theme.theTheme.resultTie

            const size = idx === 0 ? theme.theTheme.lastResult : theme.theTheme.result

            return (<Grid item xs={1}>
              <Typography variant='body2' sx={{ ...color, ...size }}>
                {score}
              </Typography>
            </Grid>)
          })}
          <Grid item container xs={10} >
            <Button variant='text'>
              Clear scoreboard
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={5}>
        <img src={imgQ} style={{ maxWidth: '100%' }} />
      </Grid>
    </Grid >
  )
}