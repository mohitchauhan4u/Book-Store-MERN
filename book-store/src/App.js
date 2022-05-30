import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import About from "./components/About";
import Books from "./components/Book/Books";
import BookDetails from "./components/Book/BookDetails";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<AddBook />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/books" element={<Books />} />
          <Route exact path="/books/:id" element={<BookDetails />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
