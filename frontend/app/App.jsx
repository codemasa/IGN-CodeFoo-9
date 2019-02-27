import React from 'react';
import { Switch, Route, Redirect, withRouter  } from 'react-router-dom';
import { GlobalStyles } from './styles.js';
import styled from 'styled-components';
import importComponent from 'react-imported-component';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from './components/Header.jsx';
import SideBar from './components/SideBar.jsx';
import Latest from './pages/Latest.jsx';
import Articles from './pages/Articles.jsx';
import Videos from './pages/Videos.jsx';

const Wrapper = styled.div`
    .fade-enter {
      opacity: 0;
    }
    .fade-enter-active {
      opacity: 1;
      transition: opacity 20000ms ease-in;

    }
    .fade-exit {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0;
      transition: opacity 600ms ease-out;
    }
    div.transition-group {
      position: relative;
    }

    section.route-section {
      position: absolute;
      margin-left: 20%;
      width: 50%;
      top: 0;
      left: 0;
    }
`;

function App({location}){
  return(
  <React.Fragment>
    <GlobalStyles />
    <Header/>
    <SideBar/>
    <Wrapper>

      <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            appear={true}
            mountOnEnter={true}
            unmountOnExit={true}
            timeout={{enter: 600, exit: 600}}
            classNames={'fade'}
          >
            <section className="route-section">
              <Switch location={location}>
                <Route path="/latest" component={Latest} />
                <Route path="/videos" component={Videos} />
                <Route path="/articles" component={Articles} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>

      </Wrapper>
    </React.Fragment>
  )
}
export default withRouter(App);
