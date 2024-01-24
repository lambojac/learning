import React from 'react'
import {useState} from "react"

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
          const ProductSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    // Add more products as needed
  ];

  const handleSearch = () => {
    const filteredResults = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search for products online"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Search Results:</h2>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map(product => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../components/boxes/LoadingBox";
import MessageBox from "../components/boxes/MessageBox";
import { SignIn } from "../redux/action/userAction";

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(SignIn(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="signin">
      <form className="form">
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <input
          placeholder="Your Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Your Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={submitHandler}>
          Log In
        </button>
      </form>
    </div>
  );
}

export default SignInScreen;
export default ProductSearch;
        </div>
      )}
    </di

export default Dropdown;

  )
}

export default App
