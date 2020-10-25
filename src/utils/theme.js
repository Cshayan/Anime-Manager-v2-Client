import { createMuiTheme } from '@material-ui/core/styles';

export const pxToRem = (px) => `${px / 22.5}rem`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#5DAAE0',
      dark: '#273D49',
    },
    secondary: {
      main: '#ecf0f1',
    },
    text: {
      primary: '#111',
    },
    background: {
      default: 'linear-gradient(to right, #ece9e6, #ffffff)',
    },
  },
  typography: {
    pxToRem: (px) => pxToRem(px),
  },
  card: {
    background: 'linear-gradient(to right, #abbaab, #ffffff)',
  },
  button: {
    background: {
      light: 'linear-gradient(to right, #1f4037, #99f2c8)',
    },
    delete: {
      background: 'linear-gradient(to right, #ee0979, #ff6a00)',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#34495e',
        border: '1px solid #fff',
      },
    },
    MuiDialog: {
      root: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      paper: {
        background: 'linear-gradient(to right, #abbaab, #ffffff)',
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#5DAAE0',
      dark: '#273D49',
    },
    secondary: {
      main: '#2c3e50',
    },
    text: {
      primary: '#fff',
    },
    background: {
      default: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    },
  },
  typography: {
    pxToRem: (px) => pxToRem(px),
  },
  card: {
    background: 'linear-gradient(to right, #485563, #29323c)',
  },
  button: {
    background: {
      light: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    },
    delete: {
      background: 'linear-gradient(to right, #ee0979, #ff6a00)',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#34495e',
        border: '1px solid #fff',
      },
    },
    MuiDialog: {
      root: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      paper: {
        background: 'linear-gradient(to right, #485563, #29323c)',
      },
    },
  },
});
