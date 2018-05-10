import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Pages */
import Home from './Pages/Home';
import WebTeam from './Pages/WebTeam';
import CsChapter from './Pages/CsChapter';
import WieChapter from './Pages/WieChapter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/webteam" component={WebTeam} />
            <Route path="/cschapter" component={CsChapter} />
            <Route path="/wie" component={WieChapter} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
