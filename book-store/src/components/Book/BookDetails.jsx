import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => console.log(res.data));
    };
    fetchHandler();
  }, [id]);

  return <div></div>;
};

export default BookDetails;
