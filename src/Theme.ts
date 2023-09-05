import createTheme from "@mui/material/styles/createTheme";

const theTheme = {
  centered: {
    margin: "0 auto",
    textAlign: "center",
  },
  playOption: {
    border: '3px solid black',
    borderRadius: '4px',
    overflow: 'hidden',
    maxHeight: '90px',
    '&:hover': {
      border: '3px solid red',
    }
  },
  resultWin: {
    color: 'green'
  },
  resultTie: {
    color: 'gray'
  },
  resultLose: {
    color: 'red'
  },
  result: {
    fontSize: '1em'
  },
  lastResult: {
    fontSize: '1.5em'
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    },
    theTheme: typeof theTheme
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    },
    theTheme?: typeof theTheme
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'FinalFrontier',
  },
  theTheme: theTheme,
});