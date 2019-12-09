import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Book from "../components/Book";
import StyledCol from "../components/StyledCol";
import { getBookById } from "../services/BookService";
import { Row, Typography, Rate } from "antd";
const { Text } = Typography;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [rating, setRating] = useState(3);

  useEffect(() => {
    const getDataAndUpdate = async () => {
      const content = await getBookById(id);
      setBook(content.data[0]);
    };

    getDataAndUpdate();
  }, [id]);

  const handleChange = value => {
    console.log(value);
    setRating(value);
  };

  const bookCard = book && <Book book={book} />;
  const bookDescription = bookCard && <Text>{book.description}</Text>;
  const price = bookCard && <Text strong>Price: {book.price}$</Text>;
  const bookRating = bookCard && (
    <span>
      <Rate tooltips={desc} onChange={handleChange} value={rating} />
    </span>
  );

  return (
    <div>
      <Row gutter={24}>
        <StyledCol>{bookCard}</StyledCol>
        <StyledCol>{bookDescription}</StyledCol>
        {price}
        <StyledCol>{bookRating}</StyledCol>
      </Row>
    </div>
  );
};

export default BookPage;
