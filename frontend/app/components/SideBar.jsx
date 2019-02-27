import React from 'react';
import Helmet from 'react-helmet-async';
import { Nav, NavLink } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { play, newspaperO } from 'react-icons-kit/fa/'
import {check} from 'react-icons-kit/metrize/check'
import styled from 'styled-components';
const SBDiv = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 20%;
  justify-content: center;
  align-items: center;
  text-align: left;
  float: left;


  display: inline-block;
`;

const SBTabs = styled(NavLink)`
  padding: 10px;
  margin-left: 15%;
  margin-right: 5%;

  text-decoration: none;
  font-family: "Arial";
  color: #939194;
  &:visited, &:link, &:active{
    text-decoration: none;
  }
  &:hover, &:focus{
    border-radius: 3px;
    background: #C7C5C8;
    color: #FFFFFF;

  }
  &.active{
    border-radius: 3px;
    background: #B51012;
    color: #FFFFFF;

  }
  display: block;
`;

const SBLabel = styled.p`
  display: inline;
  text-decoration: none;
  font-family: "Arial";

  padding-left: 20px;

`

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
          ><Icon size={25} icon={check}/><SBLabel>Latest</SBLabel></SBTabs>
          <SBTabs
          to="/videos"
          exact activeClassName="active"
          ><Icon size={25} icon={play}/><SBLabel>Videos</SBLabel></SBTabs>
          <SBTabs
          to="/articles"
          exact activeClassName="active"
          ><Icon size={25} icon={newspaperO}/><SBLabel>Articles</SBLabel></SBTabs>


      </SBDiv>
    )
  }
}
export default SideBar;
