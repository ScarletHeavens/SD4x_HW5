import React from 'react';
import List from './List.js';


const Lists = ({lists, items, addItem}) => {
if (!lists.length) {
return ( <div id="listsDiv" className="List">
  <h2>Add new list to get started!</h2>
</div>)}
 else {return (<div>
{lists.map(listName => <List name = {listName}  items= {items[listName]} addItem={addItem}/>)}
</div>)}
}

export default Lists;

