const express = require("express");
const router = express.Router();
const Book = require("../model/Book");

router.get("/", (req, res, next) => {
    //this route will provide all of the books
    let books;
    try {
        books=await Book.find();
    } catch (error) {
        console.log("Error",error);
    }
    if(!books){
        return res.status(404).json({message: "No product find"})
    }
    return res.status(200).json({books});

});

module.exports=router;