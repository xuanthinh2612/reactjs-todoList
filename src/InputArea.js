import { useState } from "react";
import ListItem from "./ListItem.js";

function InputArea() {

    const [item, setItem] = useState()
    const [itemList, setItemList] = useState(() => {

        // get item from localStorage
        let localStorageItem = JSON.parse(localStorage.getItem("itemList"))
        return(localStorageItem ?? [])
    })
    
    const handleAddItem = (addedItem) => {
        if(addedItem) {
            const newListItem = [...itemList, addedItem]
            setItemList(newListItem)
            setItem("")

            // save to localStorage
            const saveListItem = JSON.stringify(newListItem)
            localStorage.setItem("itemList", saveListItem)
        } else {
            alert("Vui lòng nhập vào nội dung")
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === "Enter") {
            handleAddItem(item)
        }
    }

    return (
      <div>
        <input
            value={item}
            onChange={e => setItem(e.target.value)}
            onKeyPress={handleKeyPress}
        />
        <button onClick={() => handleAddItem(item)}>Add</button>
        <br/>
        {itemList.length > 0 && <ListItem 
            itemList={itemList}
            setItemList={setItemList}
        /> }
        
      </div>
    );
  }
  
  export default InputArea;
  