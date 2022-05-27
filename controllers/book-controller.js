const Book = require("../model/Book");

const getAllBook = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (error) {
    console.log("Error", error);
  }

  if (!books) {
    return res.status(404).json({ message: "No product find" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log("ERROR", error);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, author, description, price, available } = req.body;
  let book;
  try {
    book = new Book({ name, author, description, price, available });
    await book.save();
  } catch (error) {
    console.log("Error", error);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ book });
};

exports.getAllBook = getAllBook;
exports.addBook = addBook;
exports.getById = getById;
