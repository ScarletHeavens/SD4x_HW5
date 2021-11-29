import React from 'react';

const ListItem = ({item}) => {
const [color,setColor] = React.useState('black');

	
let handleClick = () => {
   color === 'black'? setColor('grey') : setColor('black')
    }

    return (
	    <span onClick={handleClick} style={{color: color}}>
        <strong>{item.name}</strong>
      </span>
    );

  }


export default ListItem;


