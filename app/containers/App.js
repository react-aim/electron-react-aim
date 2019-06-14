// @flow
import * as React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CanvasNest from 'canvas-nest.js';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F50057',
      dark: '#DA004D',
    },
    secondary: {
      main: '#2962FF',
      dark: '#1749D0',
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
type State = {};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    const config = {
      color: '41, 98, 255',
      pointColor: '41, 98, 255',
      count: 66,
    };
    // \\$FlowIgnore
    new CanvasNest(this.ref.current, config);
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div ref={this.ref}>{children}</div>
      </ThemeProvider>
    )
  }
}
