import React from "react";
import ShoppingList from "./components/ShoppingList.js"

export default function App() {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-4">
        <div className="shopping-wrapper py-5 d-flex flex-column align-items-center">
          <div className="shopping-header text-white text-center d-flex align-items-center justify-content-center font-weight-bold p-4">
            <h4 className="font-weight-bold m-0">My awesome shopping list</h4>
          </div>
          <ShoppingList/>
        </div>
      </div>
    </div>
  );
}


