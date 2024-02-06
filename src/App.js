
import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";

import Meals from "./components/Meals/Meals";


function App() {

  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true);
  }

  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    
    <div className='App'>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShownCart={showCartHandler}></Header>

      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
