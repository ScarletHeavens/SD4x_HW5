import React from 'react';


const AddList = (props) => {

let input1 = React.useRef(null);

let handleSumbit = (e) => {
e.preventDefault();
props.addList(input1.current?.value);
input1.current.value = '';
}


return(
  <div id="addListDiv">
    <div><form onSubmit ={ handleSumbit}>
      <div id='addList'>
        <label>What will be on your next list? 
        <input type='text' ref={input1} ></input>
        </label>
      </div>
      <input type='submit' value='Create List'/>
      </form>
      </div>
  </div>
)
}

export default AddList;

