import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit'
import {commentO} from 'react-icons-kit/fa/commentO'

const Wrapper = styled.div`

  width: 80%;
`
const Thumbnail = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  height: 7.5em;
  width: 12em;
  background-color: #EEAACC;
  float: left;

`

const MetaData = styled.div`

  display: inline-flex;
  color: #B51012;
`

const Divider = styled.hr`
  left: 0;
  bottom: 0;
  width: 100%;
  margin: 0;
`
const Uploaded = styled.p`
  padding-top: .7em;
  padding-right: .25em;
  padding-left: .75em;

  font-size: 10px;
  white-space: pre;
`

const CommentCount = styled.p`
  text-decoration: none;
  font-size: 10px;
  display: inline;

`

const Comments = styled.a`
  padding-left: .25em;
`

const Description = styled.p`
  display: grid;
  padding-left: .5em;

`

class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Wrapper>
        <Thumbnail>

        </Thumbnail>
        <MetaData>
          <Uploaded>{this.props.uploaded ? this.props.uploaded : "0m"}  ·</Uploaded>
          <Comments href="/articles"><Icon size={10}icon={commentO}/>
            <CommentCount>{this.props.commentCount ? this.props.commentCount : null}</CommentCount>
          </Comments>
        </MetaData>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Description>
        <Divider/>
      </Wrapper>
    )
  }
}
export default Article;
