import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { GlobalStyles } from './styles.js';
import importComponent from 'react-imported-component';

import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import Latest from './components/Latest.jsx';
import Articles from './components/Articles.jsx';
import Videos from './components/Videos.jsx';


const App = () => (
  <React.Fragment>
    <GlobalStyles />
    <Header/>
    <SideBar/>
    <Switch>
      <Route exact path="/latest" component={Latest} />
      <Route exact path="/videos" component={Videos} />
      <Route exact path="/articles" component={Articles} />
      <Redirect to="/latest" />
    </Switch>
  </React.Fragment>
)
export default App
