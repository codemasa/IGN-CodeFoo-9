import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from './Contents.jsx';


class Articles extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Contents>
        Articles
      </Contents>
    )
  }
}
export default Articles;
