import React, {useState, useEffect} from "react";
import NewShoppingListItem from "./NewShoppingListItem";

const todoItem = (item) => {
  const itemDone = item.done;
  if (itemDone) {
    return (
      <div key={item.name} className="d-flex align-items-center justify-content-between shopping-item bg-white mb-3 p-3 px-4 w-100">
        <div><del>{item.name}</del></div>
        <i class="fas fa-check-circle"></i>
      </div>
    )
  }
  return (
    <div key={item.name} className="d-flex align-items-center justify-content-between shopping-item bg-white mb-3 p-3 px-4 w-100">
      <div>{item.name}</div>
      <i class="far fa-circle"></i>
    </div>
  )
}

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  function fetchItems() {
    fetch("api/v1/shopping_list_items")
      .then(response => response.json())
      .then(data => setItems(data.items))
  }

  function handleNewItem(newItem) {
    setItems([...items, newItem])
  }

  useEffect(fetchItems, []);

  return (
    <>
      <div className="shopping-list p-3 p-md-5 pb-md-3 d-flex flex-column justify-content-between">
        <div>
          {items.map(todoItem)}
        </div>
        <NewShoppingListItem onSubmit={handleNewItem}/>
      </div>
    </>
  )
}

export default ShoppingList;
