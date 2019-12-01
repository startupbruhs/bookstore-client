import React from "react";
import Book from "../components/Book";
import { goat } from "../assets/images";
import { Row } from "antd";

const Books = () => {
  const fakeBooks = [
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afsdfds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afsasdfds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "asfdsa" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afsaasdfds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afs33dfds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afs22dfds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afsd11fds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afsdf543ds" },
    { name: "bookName", author: "eraldo", imagePath: goat, id: "afs1133dfds" }
  ];

  const books = fakeBooks.map(book => <Book key={book.id} book={book} />);

  return <Row gutter={24}>{books}</Row>;
};

export default Books;
