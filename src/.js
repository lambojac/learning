import React from 'react'

function App() {

const[Increment, setIncrement]=useState(0)
const[Decrement, setDecrement]=useState(1)

const Increase=(count)=>{
    setIncrement(
        Increment?0:+1
    )
}
const Decrease=(event)=>{
    setDecrement(Decrement?0:-1)
}
  return (
    <div>
      
    <div>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
    </div>
    </div>
    import React, { useState } from 'react';

const Dropdown = () => {
  // State to manage the visibility of the dropdown
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>Toggle Dropdown</button>

      {/* Render the dropdown if it's visible */}
      {isDropdownVisible && (
        <div>
          {/* Your dropdown content goes here */}
          <p>Dropdown Content</p>
          <p>More Dropdown Content</p>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

  )
}

export default App
