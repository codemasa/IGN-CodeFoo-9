import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';


class Latest extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Contents>
        Latest
      </Contents>
    )
  }
}
export default Latest;
