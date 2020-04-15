import React from 'react';
import User from './User';

function Card(props) {
  return <User firstName={props.firstName} lastName={props.lastName}/>
}
export default Card;
