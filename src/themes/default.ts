import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
    button: {
      textTransform: 'unset',
    },
    h1: {
      fontSize: '3.5rem',
      letterSpacing: -0.5,
      lineHeight: 1.143,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: '100%',
          scrollBehavior: 'smooth',
        },
        body: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: ['"Noto Sans"', '"Ubuntu"', '"Helvetica Neue"', 'sans-serif'].join(','),
          height: '100%',
          overflowY: 'scroll',
        },
        '#root': {
          height: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          ...(ownerState.size === 'small' && {
            padding: theme.spacing(0.25, 0.5),
          }),
          ...(ownerState.size === 'medium' && {
            padding: theme.spacing(0.5, 1),
          }),
        }),
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
        disableAnimation: true,
      },
      styleOverrides: {
        root: ({ theme, ownerState }) => ({
          fontSize: theme.typography.body2.fontSize,
          lineHeight: theme.typography.body2.lineHeight,
          letterSpacing: 0.25,
          ...((ownerState.formControl as any).variant === 'standard' && {
            transform: 'unset',
            position: 'relative',
            '+ .MuiInput-root': {
              marginTop: 0,
            },
          }),
        }),
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginLeft: theme.spacing(2),
        }),
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...((ownerState.formControl as any).variant === 'standard' && {
            height: theme.spacing(6),
            borderRadius: theme.shape.borderRadius,
            border: '1px solid #7b7b7b',
            ':after': {
              content: 'none',
            },
            ':before': {
              content: 'none',
            },
          }),
        }),
        input: ({ theme }) => ({
          padding: theme.spacing(1.5, 2),
        }),
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: () => ({
          lineHeight: 1.33,
          letterSpacing: 0.4,
        })
      }
    }
  },
  palette: {
    primary: {
      main: '#4d4d4d',
    },
    secondary: {
      main: '#baa182',
      dark: '#b69d7f',
      contrastText: '#2a2118',
    },
    error: {
      main: '#ba1a1a',
    },
    background: {
      default: '#f9f9fa',
    },
    action: {
      hoverOpacity: 0.08,
    },
    text: {
      primary: '#1c1b1f',
      secondary: '#4d4d4d',
    },
  },
});

export default theme;
