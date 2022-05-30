import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControlLabel,
  FormLabel,
  TextField,
  Checkbox,
} from "@mui/material";
import { Box } from "@mui/system";

const AddBook = () => {
  const history = useNavigate();
  /**Not working code with useStste taking input
   * const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(inputs, checked);
  };*/
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [checked, setChecked] = useState(false);

  const sendRequest = async () => {
    await axios.post("http://localhost:5000/books", {
      name: String(name),
      description: String(description),
      image: String(image),
      author: String(author),
      price: Number(price),
      available: Boolean(checked),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, author, description, price, image, checked);
    sendRequest().then(() => history("/books"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent="center"
        alignSelf={"center"}
        marginLeft="auto"
        marginRight="auto"
        marginTop={"1%"}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
        ></TextField>
        <FormLabel>Author</FormLabel>
        <TextField
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
        ></TextField>
        <FormLabel>Description</FormLabel>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
        ></TextField>
        <FormLabel>Price</FormLabel>
        <TextField
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type={"number"}
          margin="normal"
          fullWidth
          variant="outlined"
        ></TextField>
        <FormLabel>Image</FormLabel>
        <TextField
          value={image}
          onChange={(e) => setImage(e.target.value)}
          margin="normal"
          fullWidth
          variant="outlined"
        ></TextField>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={() => setChecked(!checked)}
            ></Checkbox>
          }
          label="Available"
        />
        <Button type="submit" variant="contained">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
