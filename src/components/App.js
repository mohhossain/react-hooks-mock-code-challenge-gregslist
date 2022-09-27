import { React, useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((items) => {
        console.log(items);
        setItems(items);
      });
  }, []);

  const updateItems = (items) => {
    setItems(items);
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer updateItems={updateItems} items={items} />
    </div>
  );
}

export default App;
