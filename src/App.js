import React from 'react';
import Lists from './Lists.js';
import AddList from './AddList.js';
import './App.css';


const App = () =>  {
  const [lists, setList] = React.useState([]);
  let [items, setItems] = React.useState({});

 const handleAddList = (s) => {
  let newItems = items;
  newItems[s] = [];
    setItems(newItems);
    setList(lists.concat(s));
  }


 const handleAddItem = (name, idName) => {
   let newItems = {...items};
   newItems[idName].push({...name}); 
  setItems(newItems);

  };

    return (
      <div className="App">
        <AddList addList={handleAddList} />
        <div id="listsDiv" className="List">
          <Lists lists={lists} items={items} addItem={handleAddItem} />
        </div>
      </div>
    );

}

export default App;

 