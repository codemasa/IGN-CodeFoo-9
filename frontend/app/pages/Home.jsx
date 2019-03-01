import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';


class Home extends React.Component{
  constructor(props){
    super(props);
  }



  render(){

    return(
      <Contents>
        <Helmet><title>Home</title></Helmet>
        <h1>Welcome to the Frontend portion of this code foo!</h1>
        <p>Click any of the links in the side bar to get to see the project. </p>
      </Contents>
    )
  }
}
export default Home;
