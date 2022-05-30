import React from "react";
import { Button } from "@mui/material";

const Book = (props) => {
  const { name, author, description, price, image } = props.book;
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs. {price}</h3>
      <Button sx={{ mt: "auto" }}>Update</Button>
      <Button sx={{ mt: "auto" }}>Delete</Button>
    </div>
  );
};

export default Book;
