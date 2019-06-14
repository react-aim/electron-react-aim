// @flow
import * as React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F50057',
    },
    secondary: {
      main: '#2962FF',
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'capitalize',
      },
    },
  },
});

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    )
  }
}
