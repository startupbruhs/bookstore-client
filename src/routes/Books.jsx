import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import { Row } from "antd";
import axios from "axios";
import { URL } from "../configs/site";

const Books = () => {
  const [apiBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const apiBooks = await axios.get(URL);
      setBooks(apiBooks.data);
    };

    getBooks();
  }, []);

  let books = null;
  if (apiBooks.length)
    books = apiBooks.map(
      book => book.thumbnailUrl && <Book key={book.id} book={book} />
    );

  return <Row gutter={24}>{books}</Row>;
};

export default Books;
