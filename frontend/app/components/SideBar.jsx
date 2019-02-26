import React from 'react';
import Helmet from 'react-helmet-async';
import { Nav, NavLink } from 'react-router-dom';

import styled from 'styled-components';
const SBDiv = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 20%;
  justify-content: center;
  align-items: center;
  text-align: left;
  background-color: #AAEEAA;
  float: left;


  display: inline-block;
`;

const SBTabs = styled(NavLink)`
  padding: 10px;
  margin: 10px
  text-decoration: none;
  font-family: "Arial";
  color: #939194;
  &:visited, &:link, &:active{
    text-decoration: none;
  }
  &:hover, &:focus{
    border-radius: 3px;
    background: #939194;
    color: #FFFFFF;

  }
  &.active{
    border-radius: 3px;
    background: #B51012;
    color: #FFFFFF;

  }
  display: block;
`;

class SideBar extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <SBDiv>
          <SBTabs
          to="/latest"
          exact activeClassName="active"
          >Latest</SBTabs>
          <SBTabs
          to="/Articles"
          exact activeClassName="active"
          >Articles</SBTabs>
          <SBTabs
          to="/videos"
          exact activeClassName="active"
          >Videos</SBTabs>

      </SBDiv>
    )
  }
}
export default SideBar;
