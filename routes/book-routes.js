const express = require("express");
const router = express.Router();
const booksController = require("../controllers/book-controller");

router.get("/", booksController.getAllBook);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);

module.exports = router;
