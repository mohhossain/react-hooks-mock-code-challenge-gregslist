import { React, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, updateItems }) {
  console.log(items, "Coming from ListingsContainer");

  const [item, setItem] = useState({});

  const onDelete = (item) => {
    console.log(item, "this is coming from the listing card");
    setItem(item);
    const filteredItems = items.filter((data) => {
      return data.id !== item.id;
    });

    updateItems(filteredItems);
  };

  return (
    <main>
      <ul className="cards">
        {items.map((item) => {
          return (
            <ListingCard
              key={item.id}
              item={item}
              onDelete={onDelete}
            ></ListingCard>
          );
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
