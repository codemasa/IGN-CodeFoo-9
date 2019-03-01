import React from 'react';
import Helmet from 'react-helmet-async';
import Contents from '../components/Contents.jsx';
import Article from '../components/Article.jsx';


class Latest extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data: null
    }
  }


  componentDidMount(){
    fetch("https://ign-apis.herokuapp.com/content?\u0026count=300", {
      method: "GET",
      mode: "cors",
    })
    .then((response) => response.json())
    .then((myJson) => this.setState({data: myJson.data}));
  }


  render(){
    const data = this.state.data;

    return(
      <Contents>
      {data ? data.map((data, key) =>
        {
          if(data.contentType == "video"){
            return null;
          }
          return(
            <Article key={key} data={data}/>
          )
        }) : null}
      </Contents>
    )
  }
}
export default Latest;
