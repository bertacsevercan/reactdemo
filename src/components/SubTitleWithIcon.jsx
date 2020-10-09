import React from 'react';
import { Glyphicon } from 'react-bootstrap'

export default function SubTitleWithIcon(props){
 
  const print = () => {
    console.log(props.icon)
  }
  return(
      <h4><Glyphicon glyph={props.icon} /> {props.title}</h4> 

  );
}
