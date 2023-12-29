import React, { useEffect, useState } from "react";
import "./News.css"

const News = () => {

    const [mynews , setMyNews] =useState ([])

    const fetchData = async() => {
        let resonse = await fetch(" https://newsapi.org/v2/top-headlines?country=us&apiKey=f90a38c04f8e4aca871db21a3cfa2a70");
        let data = await resonse.json();
        setMyNews(data.articles)
    }
    //console.log(mynews)

    useEffect (() => {
        fetchData();
    },[])

  return (
    <>
      <div className="mainDiv">
        {mynews.map((ele) => {
            console.log(ele)     
            return (
                <>
          
    
    <div class="card" style={{width: "300px" , height :"400px" ,marginLeft:"7.2rem" ,marginTop:"2rem"}}>
    
    <img src={ele.urlToImage  == null ? "https://sportshub.cbsistatic.com/i/r/2023/08/09/3db4aa9e-59a9-4936-bca8-3bedbd15c16d/thumbnail/1200x675/45e2724baadfe7ced16243037d16ab21/pzs-official-zero-of-nfl-3.jpg:*" : ele.urlToImage } class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{ele.author}</h5>
      <p class="card-text">
        {ele.title}
      </p>
      <a href={ele.url} target="__blank"class="btn btn-primary">Read More</a>
    </div>
  </div>
    
    </>  
            );
     })}
  </div>
 </> 
  );
};


export default News