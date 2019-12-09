import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import StyledCol from "../components/StyledCol";
import { getBookById } from "../services/BookService";
import { Row, Typography } from "antd";
const { Text } = Typography;

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getDataAndUpdate = async () => {
      const content = await getBookById(id);
      setBook(content.data[0]);
    };

    getDataAndUpdate();
  }, [id]);

  const bookCard = book && <Book book={book} />;
  const bookDescription = bookCard && <Text>{book.description}</Text>;
  const price = bookCard && <Text strong>Price: {book.price}$</Text>;

  return (
    <div>
      <Row gutter={24}>
        <StyledCol>{bookCard}</StyledCol>
        <StyledCol>{bookDescription}</StyledCol>
        {price}
      </Row>
    </div>
  );
};

export default BookPage;
