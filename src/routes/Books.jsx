import React from "react";
import Book from "../components/Book";
import { goat } from "../assets/images";
import { Row } from "antd";

const Books = () => {
  const fakeBooks = [
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat },
    { name: "bookName", author: "eraldo", imagePath: goat }
  ];

  const books = fakeBooks.map(book => <Book book={book} />);

  return <Row gutter={24}>{books}</Row>;
};

export default Books;
