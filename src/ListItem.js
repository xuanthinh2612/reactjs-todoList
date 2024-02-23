
function ListItem({itemList, setItemList}) {

    const handleDeleteItem = (item) => {
        if(item) {
            let newItems = itemList.filter(e => e !== item)
            setItemList(newItems)

            const saveListItem = JSON.stringify(newItems)
            localStorage.setItem("itemList", saveListItem)

        }
    }

    return (
      <div className="App" style={{padding: 30}}>
        <ul>
            {
                itemList.map((item, index) => (
                <li key={index}>
                    <button index={index}
                        onClick={() => handleDeleteItem(item)}
                    >Delete</button>
                    {item}

                </li>
                ))
            }
        </ul>
      </div>
    );
  }
  
  export default ListItem;
  