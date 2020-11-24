import { createMuiTheme } from '@material-ui/core/styles';

export const pxToRem = (px) => `${px / 22.5}rem`;

export default createMuiTheme({
  palette: {
    primary: {
      main: '#27ae60',
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
  badge: {
    background: 'linear-gradient(to right, #00b09b, #96c93d)',
    background2:
      'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)', // blue gradient badge
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
      default: 'linear-gradient(to left, #000000, #434343)',
    },
  },
  typography: {
    pxToRem: (px) => pxToRem(px),
  },
  card: {
    background: 'linear-gradient(to right, #232526, #414345)',
  },
  button: {
    background: {
      light: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    },
    delete: {
      background: 'linear-gradient(to right, #ee0979, #ff6a00)',
    },
  },
  badge: {
    background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    background2: 'linear-gradient(to right, #00b09b, #96c93d)', // green gradient badge
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
        background: 'linear-gradient(to left, #000000, #434343)',
        border: '1px solid #fff',
      },
    },
  },
});
