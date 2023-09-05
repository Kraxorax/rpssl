import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { PlayResult } from "../models/APIResponse";
import { Grid, Typography, useTheme } from "@mui/material";
import { playOptions } from "../models/PlayOptions";


export const ResultModal = (props: { result: PlayResult, onClose: () => void }) => {
  const { result, onClose } = props
  const theme = useTheme()

  const playerPlay = playOptions[result.player - 1]
  const qPlay = playOptions[result.computer - 1]

  const color = result.results === 'win'
    ? theme.theTheme.resultWin
    : result.results === 'lose'
      ? theme.theTheme.resultLose
      : theme.theTheme.resultTie

  return (<Modal
    open={result !== null}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={{ ...theme.theTheme.resultModal, border: `8px solid ${color.color}` }}>
      <Grid container direction={'row'}>
        <Grid item xs={4} >
          <img src={playerPlay.imageURL} style={{ maxWidth: '100%' }} />
        </Grid>
        <Grid item xs={4} >
          <Typography variant={'h3'} sx={{ ...color, ...theme.theTheme.centered }}>
            {result.results === 'tie'
              ? 'Tie!'
              : result.results === 'win'
                ? 'You win!'
                : 'Q wins!'}
          </Typography>
        </Grid>
        <Grid item xs={4} >
          <img src={qPlay.imageURL} style={{ maxWidth: '100%' }} />
        </Grid>
      </Grid>
    </Box>
  </Modal>)
}