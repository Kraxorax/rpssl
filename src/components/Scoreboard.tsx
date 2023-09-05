import { Button, Grid, Typography, useTheme } from "@mui/material";
import { PlayResult } from "../models/APIResponse";

export const Scoreboard = (props: { scores: PlayResult['results'][], clearScores: () => void }) => {
  const { scores, clearScores } = props
  const theme = useTheme()

  return (<Grid item container columns={10}>
    <Grid item xs={10}>
      <Typography>Scoreboard:</Typography>
    </Grid>
    <Grid item container direction={'row'} alignItems='center'>
      {scores.map((score, idx) => {
        const color = score === 'win'
          ? theme.theTheme.resultWin
          : score === 'lose'
            ? theme.theTheme.resultLose
            : theme.theTheme.resultTie

        const size = idx === 0 ? theme.theTheme.lastResult : theme.theTheme.result

        return (<Grid key={score + idx} item xs={1}>
          <Typography variant='body2' sx={{ ...color, ...size }}>
            {score}
          </Typography>
        </Grid>)
      })}
    </Grid>
    <Grid item xs={10} >
      <Button variant='text' onClick={clearScores}>
        Clear scoreboard
      </Button>
    </Grid>
  </Grid>)
}
