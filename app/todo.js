"use client"; 
import React, { useState } from "react";
// import logo from "../component/images/aman.jpg";

const Todo = () => {
  const [inputData, setInputData] = useState();
  const [items, setItems] = useState([]);
  const [filteredList, setFilteredList] = new useState(items);
  const [bgColor, setBgColor] = useState('#fff');

  //adding item to the list
  const addItem = () => {
    if (!inputData) {
      alert("Item can't be empty");
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

//deleting item from the list
  const deleteItem = (id) => {
    const updatedItems = items.filter((elem, index) => {
      return index !== id;
    });

    setItems(updatedItems);
  };

  //for changing background if Done clicked
  const TaskDone =(id)=>{
    deleteItem(id);
    }
       
  
  

//removing all items at once
  const removeAll = () => {
    setItems([]);
  };

  //searchbar functionality
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...items];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => 
      {
        return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }
  );
    // Trigger render with updated values
 
        setFilteredList(updatedList);

        if(query === "") return setFilteredList([])
   
  };

  return (
    <>
   
     <div className='main-div'>
       <h1 className="title">ToDoLIST Section</h1>
        <div className='child-div'>
        <input type="text" placeholder="Search Here" onChange={filterBySearch} />
        <div className='showItems'>
            {filteredList.map((elem, index) => {
              return (
                <div className='eachItem' style={{background: bgColor}} key={index}>
                  <h3>{elem}</h3>
                
                </div>
              );
            })}
          </div>
        </div>
       
        <div className='child-div'>
          
          <div className='addItems'>
            <input
              type='text'
              placeholder='Add Items'
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              className='fa fa-plus add-btn'
              title='Add Item'
              onClick={addItem}
            ></i>
          </div>
{/* Showing listed items */}
          <div className='showItems'>
            {items.map((elem, index) => {
              return (
                <div className='eachItem' key={index} style={{background: bgColor}}>
                  <h3>{elem}</h3>
                  <i className=" fa fa-check tick" onClick={()=>TaskDone(index)}></i>
                  <i
                    className='far fa-trash-alt add-btn'
                    title='Delete Item'
                    onClick={() => deleteItem(index)}
                  ></i>
                </div>
              );
            })}
          </div>

          {/* ClearAll Button */}
          <div className='showItems'>
            <button
              className='btn effect-04 custom_bt'
              data-sn-link-text='Remove All'
              onClick={removeAll}
            >
              <span> Clear List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo