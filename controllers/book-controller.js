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

exports.getAllBook = getAllBook;
