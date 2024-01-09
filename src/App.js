import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
// Form.js

import React, { useState } from 'react';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Define your form fields here
    name: '',
    email: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can send the form data to your server, perform validation, etc.
    // Reset the form or close the popup if needed
    onClose();
  };

  return (
    <div className="form-popup">
      <form onSubmit={handleSubmit}>
        {/* Input fields */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        {/* Add more input fields as needed */}

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
'import React, { useState } from 'react';
import Form from './Form';

const App = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="app-container">
      <button onClick={handleButtonClick}>Open Form</button>

      {isFormVisible && <Form onClose={closeForm} />}
    </div>
  );
};

export default App;
export default Counter;
