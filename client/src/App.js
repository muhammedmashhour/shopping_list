import './App.css';

import React from 'react';

import AppNavbar from './components/Navbar/Navbar';

import ShoppingList from './components/ShoppingList/ShoppingList';


function App(props) {
  return (
    <>
      <AppNavbar />
      <ShoppingList />
    </>
  );
}

export default (App);
