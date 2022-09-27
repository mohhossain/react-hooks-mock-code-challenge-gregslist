import { React, useState } from "react";

function ListingCard({ item, onDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    console.log("Button is clicked");
    setIsFavorite(!isFavorite);
  };

  const handleDelete = () => {
    console.log("this ", item, "will be deleted");

    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        onDelete(item)
        console.log(data)
      });
  };

  console.log(isFavorite);
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
