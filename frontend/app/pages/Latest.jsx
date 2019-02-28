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
    fetch("https://ign-apis.herokuapp.com/content", {
      method: "GET",
      mode: "cors",
    })
    .then((response) => response.json())
    .then((myJson) => this.setState({data: myJson.data}));
  }


  render(){
    const data = this.state.data;
    console.log(data);

    return(
      <Contents>
        {data ? data.map((data, key) =>
          {
            if(data.contentType == "video"){
              return null;
            }
            const ms =(new Date() - new Date(data.metadata.publishDate));
            const sec = Math.floor((ms/1000) << 0);
            const min = Math.floor((sec/60) << 0);
            const hours = Math.floor((min/60) << 0);
            const days = Math.floor((hours/24) << 0);
            var uploaded = 0;
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
            {console.log(data.thumbnails)}

            return (
              <Article type={data.contentType} uploaded={uploaded} description={data.metadata.headline} thumbnail={data.thumbnails}/>
            )

          }) : null}

      </Contents>
    )
  }
}
export default Latest;
