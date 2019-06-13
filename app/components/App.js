// @flow
import * as React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import '@commonScss/index.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F50057',
      dark: '#c10045',
    },
    secondary: {
      main: '#2962FF',
      dark: '#1749d0',
    },
  },
  overrides: {
    MuiButton: {
      label: {
        textTransform: 'capitalize',
      },
    },
  },
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
});

type Props = {
  children: React.Node,
};
type State = {};

class App extends React.Component<Props, State> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>{children}</React.Fragment>
      </ThemeProvider>
    )
  }
}

export default App;
