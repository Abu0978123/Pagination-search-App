import React from "react";
import { useGlobalContext } from "../context/Context";
import './Stories.css'
export default function Stories() {
  const { hits, isLoading ,RemoveData } = useGlobalContext();
  if(isLoading) {
     return (
      <div className="loading">
      <h1>Loading</h1>
      </div>
     )
  }
  return (
    <div>
      {hits.map((items,i) => {
        const {title, author, objectID, url, num_comments} = items;
        return(
        <div className="card" key={i}>
       <h1>{title}</h1>
        <p>By <span> {author} | {num_comments}</span> comments</p>
        <div className="card-button">
          <a href={url} target="_blank">Read more</a>
          <a href="#" onClick={(()=>{RemoveData(objectID)})}>Remove</a>
        </div>
        </div>
        )
      })}
    </div>
  );
}
