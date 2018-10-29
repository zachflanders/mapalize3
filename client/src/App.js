import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import Sidebar from './components/sidebar.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
  }
});

class App extends Component {
  state = {
    response: '',
    input: 'input'
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  changeInput(i){
    this.setState({input: i});
  };

  renderNav(i){
    return(
      <Nav
        input={i}
        changeInput={(i) => this.changeInput(i)}
      />)
  };

  renderSidebar(i){
    return(
      <Sidebar
        input={i}
      />
    )
  };

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          {this.renderNav(this.state.input)}
          {this.renderSidebar(this.state.input)}
        </ MuiThemeProvider>
      </div>
    );
  }
}

export default App;
