import React from 'react';
import Card from './Card';

function CardWrapper(props) {
  return <Card firstName={props.firstName} lastName={props.lastName}/>
}
export default CardWrapper;
