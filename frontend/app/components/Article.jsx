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
    this.state = {
      duration: null,
      timePosted: null,
      commentData: null
    }
    this.getDuration = this.getDuration.bind(this);
    this.getTimePosted = this.getTimePosted.bind(this);
  }

  componentDidMount(){
    this.getTimePosted();
    fetch("https://ign-apis.herokuapp.com/comments?ids="+this.props.data.contentId, {
      method: "GET",
      mode: "cors",
    })
    .then((response) => response.json())
    .then((myJson) => this.setState({commentData: myJson}));
  }

  getDuration(){
    const sec = Math.floor((this.props.data.metadata.duration) % 60);
    const min = Math.floor((this.props.data.metadata.duration/60) << 0);
    if(sec < 10){
      return min + ":0" + sec
    }

    return min + ":" + sec;

  };

  getTimePosted(){
    var uploaded = 0;
    const ms =(new Date() - new Date(this.props.data.metadata.publishDate));
    const sec = Math.floor((ms/1000) << 0);
    const min = Math.floor((sec/60) << 0);
    const hours = Math.floor((min/60) << 0);
    const days = Math.floor((hours/24) << 0);
    if(sec < 60){
      uploaded = sec + "s";
    }
    if(min < 60){
      uploaded = sec + "m";
    }
    if(hours < 24){
      uploaded = sec + "h";
    }
    else{
      uploaded = days + "d";
    }
    this.setState({timePosted: uploaded});
  }

  render(){
    console.log(this.props.data);
    const data = this.props.data;
    const commentData = this.state.commentData;
    const commentCount = commentData ? commentData.content[0].count : null
    return(
      <Wrapper>
        <Thumbnail>
          {data.contentType == 'video' ? (<Duration>
                                          <PlayIcon><Icon size={15} icon={playCircle}/></PlayIcon>
                                          <Time>{data.metadata.duration ? this.getDuration() : "0:00"}</Time>
                                        </Duration>) : null}
          <ThumbnailImg src={data.thumbnails[1].url}/>
        </Thumbnail>


        <MetaData>
          <Uploaded>{this.state.timePosted}  ·</Uploaded>
          <Comments href="/articles"><Icon size={10}icon={commentO}/>
            <CommentCount>{commentCount > 0 ? commentCount : null} </CommentCount>
          </Comments>

        </MetaData>
        <Description href={data.articleLink ? data.articleLink : "/articles"}>
          {data.metadata.headline ? data.metadata.headline : data.metadata.title}
        </Description>

        <Divider/>
      </Wrapper>
    )
  }
}
export default Article;
