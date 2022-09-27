import { React, useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);

  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((items) => {
        console.log(items);
        setItems(items);
      });
  }, []);

  const onDelete = (deleteItem) => {
    console.log(deleteItem, "this is coming from the listing card");

    const filteredItems = items.filter((item) => {
      return item.id !== deleteItem.id;
    });

    setItems(filteredItems);
  };

  const onSearch = (searchWord) => {
    console.log(searchWord);
    setSearchWord(searchWord);
  };

  const filteredItemsFromSearch = items.filter((item) => {
    return item.description.toLowerCase().includes(searchWord.toLowerCase());
  });

  console.log(filteredItemsFromSearch);

  return (
    <div className="app">
      <Header onSearch={onSearch} />
      <ListingsContainer onDelete={onDelete} items={filteredItemsFromSearch} />
    </div>
  );
}

export default App;
