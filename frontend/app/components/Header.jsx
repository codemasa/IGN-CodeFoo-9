import React from 'react';
import Helmet from 'react-helmet-async';
import styled from 'styled-components';

const HeaderDiv = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 3%;

`
const Title = styled.h1`

`

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <HeaderDiv>
        <Title> Latest News </Title>
        <hr/>
      </HeaderDiv>
    )
  }
}
export default Header;
