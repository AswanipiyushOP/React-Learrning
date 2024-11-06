import React, {useState} from "react";
import Cards from "./cards";



const MainContent = () => {
//   const [isGoingOut , setIsGoingOut] = useState(true);
// const [thingsArray, setThingsArray] = useState(["Thing 1" , "Thing 2"]);
// function handleClick()
// {
//   setIsGoingOut(prevState => !prevState)
// }
// function addItem(){
//   setThingsArray(prevThingsArray => {
//     return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
//   })
// }
// const thingsElement = thingsArray.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
      {/* <div onClick={handleClick}>
        <h2 className="font-serif pt-4 pl-4">Is i'm going out today?</h2>
        <p>{isGoingOut ? "Yes" : "No"}</p>
      </div> */}
      {/* <div>
        <button onClick={addItem}>
          Add Item
        </button>
        {thingsElement}
      </div> */}
      <div className="justify-items-center">
        <Cards />
      </div>
    </div>
  );
};

export default MainContent;
