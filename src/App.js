import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import RaisedBtn from './RaisedBtn';
import TipsAppBar from './TipsAppBar';
import FrmTextField from './FrmTextField';
import LsrPODet from './LsrPODet';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TipsAppBar />
          <FrmTextField />
          <RaisedBtn />
          <LsrPODet />
        </div>
      </MuiThemeProvider>
    );
  }
}
export default App;