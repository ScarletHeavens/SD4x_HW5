import React from 'react';

const AddItem = ({idName, addItem}) => {
  let itemForm = React.useRef(null);

  let handleSubmit = (e) => {
  e.preventDefault();
  let name = {name: itemForm.current?.value};
  addItem(name, idName);
  itemForm.current.value = ' ';
  }
  
  var divName = 'add' + idName;
return(
 <div className='addItemDiv'> 
   <h4>Add {idName} </h4>
   <form onSubmit= {handleSubmit}>
     <div id={divName}>
<label>Name</label><br/>
<input type='text' ref={itemForm} />
     </div>
     <br/>
     <input type='submit' value='submit' />
     </form>
 </div>
  );
}


export default AddItem;

