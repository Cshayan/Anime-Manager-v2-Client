import { createTheme } from '@material-ui/core/styles';

export const pxToRem = (px) => `${px / 22.5}rem`;

export default createTheme({
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
    background: '#fff',
    text: '#fff',
  },
  button: {
    background: {
      light: '#27ae60',
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
        backgroundColor: '#111',
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

export const darkTheme = createTheme({
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
      default: 'linear-gradient(315deg, #485461 0%, #28313b 74%)',
    },
  },
  typography: {
    pxToRem: (px) => pxToRem(px),
  },
  card: {
    background: 'linear-gradient(to right, #141e30, #243b55)',
    text: '#fff',
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
    background2: 'linear-gradient(147deg, #000000 0%, #04619f 74%)', // green gradient badge
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '14px',
        color: '#fff',
        backgroundColor: '#111',
      },
    },
    MuiDialog: {
      root: {
        background: 'rgba(0, 0, 0, 0.5)',
      },
      paper: {
        background: 'linear-gradient(315deg, #485461 0%, #28313b 74%)',
        border: '1px solid #fff',
      },
    },
  },
});
