import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit'
import {commentO, playCircle} from 'react-icons-kit/fa'

const Wrapper = styled.div
`

  width: 80%;
`;
const Thumbnail = styled.div
`
  border-radius: 3px;
  margin-top: 0.5em;
  margin-bottom: 0.25em;
  width: 13.5em;
  &:hover {
    filter: alpha(opacity=80);
    opacity: .8;
  }
  float:left;
`;
const ThumbnailImg = styled.img
`
  height: 100%;
  width: 100%;
  border-radius: 3px;

`
const Duration = styled.div
`
  position: absolute;
  margin-top: 5.25em;
  margin-left: .25em;
  margin-bottom: .25em;

  padding-top: .25em;
  padding-bottom: .25em;
  padding-left: .5em;
  padding-right: .5em;
  background-color: #B51012;
  border-radius: 3px;
  color: white;
`;

const MetaData = styled.div
`
  margin-left: .5em;

  display: inline-flex;
  color: #B51012;
`;

const Divider = styled.hr
`
  clear: left;
  left: 0;
  width: 100%;
  margin: 0;
`;
const Uploaded = styled.p
`
  padding-top: .7em;
  padding-right: .25em;
  padding-left: .75em;

  font-size: 10px;
  white-space: pre;
`;

const CommentCount = styled.p
`
  text-decoration: none;
  font-size: 10px;
  display: inline;
  padding-left: .5em;

`;

const Comments = styled.a
`
  padding-left: .25em;
`;

const Description = styled.a
`
  display: grid;
  padding-left: 1em;
  &:hover, &:focus{
    text-decoration: underline;
    color: #0000FF;

  }

`;

const Time = styled.p
`
  padding-left: .5em;
  display: inline;
  font-family: "Arial";

`;
const PlayIcon = styled.div
`
  position: relative;
  display: inline;
`;


class Article extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Wrapper>
        <Thumbnail>
          {this.props.type == 'video' ? (<Duration>
                                          <PlayIcon><Icon size={15} icon={playCircle}/></PlayIcon>
                                          <Time>{this.props.duration ? this.props.duration : "0:00"}</Time>
                                        </Duration>) : null}
          <ThumbnailImg src={this.props.thumbnail[1].url}/>
        </Thumbnail>


        <MetaData>
          <Uploaded>{this.props.uploaded ? this.props.uploaded : "0m"}  ·</Uploaded>
          <Comments href="/articles"><Icon size={10}icon={commentO}/>
            <CommentCount>{this.props.commentCount ? this.props.commentCount : null}</CommentCount>
          </Comments>

        </MetaData>
        <Description href={this.props.articleLink ? this.props.articleLink : "/articles"}>
          {this.props.description ? this.props.description : null}
        </Description>

        <Divider/>
      </Wrapper>
    )
  }
}
export default Article;
