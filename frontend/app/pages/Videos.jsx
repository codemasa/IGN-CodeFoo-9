import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';
import Video from '../components/Video.jsx';


class Videos extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Contents>
        <Video/>
        <Video/>
        <Video/>

      </Contents>
    )
  }
}
export default Videos;
