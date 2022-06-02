import React, { Component } from "react";

function Fave(props) {

  function handleClick(e) {
    e.stopPropagation();
    console.log("handling Fave click!");
    props.onFaveToggle()
  };

  const className = props.isFave ? "remove_from_queue" : "add_to_queue";

    // console.log('this is Fave:isFave' , this.props)
    return (
      <div className={`film-row-fave ${className}`} onClick={handleClick}>
        <p className="material-icons">{className}</p>
      </div>
    );
  
}


export default Fave