
import './App.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './Theme'
import { RPSSL } from './pages/RPSSL'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RPSSL />
    </ThemeProvider >
  )
}

export default App
