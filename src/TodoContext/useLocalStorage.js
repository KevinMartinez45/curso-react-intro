import React from "react";

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(() => {
      try {
        let parsedItem;
  
      if(!localStorage.getItem(itemName)){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem = [];
        }else{
          parsedItem = JSON.parse(localStorage.getItem(itemName));
          setItem(parsedItem);
        }
  
        setLoading(false);
  
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000)
  }, [])
  
   const saveItem = (newTodos) => {
    localStorage.setItem(itemName, JSON.stringify(newTodos));
    setItem(newTodos)
  };


  return {
    item,
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage }