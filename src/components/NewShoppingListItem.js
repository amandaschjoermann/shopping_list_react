import React, {useState} from "react";


const NewShoppingListItem = ({onSubmit}) => {
  const [newItemName, setNewItemName] = useState("")

  const updateNewItemName = (e) => {
    setNewItemName(e.target.value)
  }

  const createNewItem = () => {
    const payload = {"shopping_list_item": {"name": newItemName} }
    console.log(payload)
    fetch("api/v1/shopping_list_items", {
      method: 'POST',
      mode: 'cors',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then( response => response.json())
      .then((data) => {
        if (data.success) {
          onSubmit({name: newItemName, done: false})
          setNewItemName("")
        } else {
          console.log(data.errors)
        }
      })
  }

  const handleClick = () => {
    createNewItem()
  }

  return (
    <>
     <div className="btn-new text-center mt-5">
        <input onChange={updateNewItemName} value={newItemName} placeholder="Add another item" className="add-item w-100 p-3 text-center"></input>
        <div onClick={handleClick} className="submit mt-1">
          <i class="fas fa-plus-circle"></i>
        </div>
      </div>
    </>
  )
}

export default NewShoppingListItem;
