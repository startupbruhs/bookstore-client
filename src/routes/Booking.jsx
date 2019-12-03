import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "antd";
import Dropdown from "../components/Dropdown";
import RangePicker from "../components/RangePicker";
import Book from "../components/Book";
import { URL } from "../configs/site";
import styled from "styled-components";

const StyledCol = styled(Col)`
  margin-top: 30px;
`;

const Booking = () => {
  const [apiBooks, setBooks] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const apiBooks = await axios.get(URL);
      setBooks(apiBooks.data);
    };

    getBooks();
  }, []);

  const [bookIsSelected, setBookIsSelected] = useState(false);
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedBook, setSelectedBook] = useState();

  const rangePicker = bookIsSelected && (
    <RangePicker
      disabledDates={disabledDates}
      setIsDateSelected={setIsDateSelected}
    ></RangePicker>
  );

  const bookButton = isDateSelected && <Button> Book</Button>;

  const book = selectedBook && <Book book={selectedBook} />;
  return (
    <div>
      <Row gutter={24}>
        <StyledCol span={12}>
          <Dropdown
            books={apiBooks}
            setDisabledDates={setDisabledDates}
            setBookIsSelected={setBookIsSelected}
            setSelectedBook={setSelectedBook}
          />
        </StyledCol>
        <StyledCol span={8}>{rangePicker}</StyledCol>
        <StyledCol>{bookButton}</StyledCol>
      </Row>

      <StyledCol>
        <Row gutter={24}>{book}</Row>
      </StyledCol>
    </div>
  );
};

export default Booking;
