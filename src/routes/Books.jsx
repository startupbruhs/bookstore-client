import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import { Row } from "antd";
import axios from "axios";
import { URL } from "../configs/Site";

const Books = () => {
  let books = null;

  const [apiBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const apiBooks = await axios.get(URL);
      setBooks(apiBooks.data);
    };
    getBooks();
  }, []);

  if (apiBooks.length)
    books = apiBooks.map(book => <Book key={book.id} book={book} />);

  return books ? <Row gutter={24}>{books}</Row> : null;
};

export default Books;
