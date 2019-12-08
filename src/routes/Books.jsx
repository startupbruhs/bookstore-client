import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import { Row } from "antd";
import { getAllBooks } from "../services/BookService";

const Books = () => {
  const [apiBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      const book = await getAllBooks();
      setBooks(book.data);
    };
    getBook();
  }, []);

  let books = null;
  if (apiBooks.length)
    books = apiBooks.map(
      book => book.thumbnailUrl && <Book key={book.id} book={book} />
    );

  return <Row gutter={24}>{books}</Row>;
};

export default Books;
