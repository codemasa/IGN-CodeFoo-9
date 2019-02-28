import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';
import Article from '../components/Article.jsx';

class Articles extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Contents>
        <Article/>
        <Article/>
        <Article/>

      </Contents>
    )
  }
}
export default Articles;
