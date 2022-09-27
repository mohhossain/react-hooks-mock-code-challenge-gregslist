import { React, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, onDelete }) {
  console.log(items, "Coming from ListingsContainer");

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
