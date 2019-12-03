import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Button } from "antd";
import Dropdown from "../components/Dropdown";
import RangePicker from "../components/RangePicker";
import Book from "../components/Book";
import { URL } from "../configs/site";
import StyledCol from "../components/StyledCol";

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
    />
  );

  const bookButton = isDateSelected && (
    <Button onClick={() => {}}> Book</Button>
  );

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
        <StyledCol span={2}>{bookButton}</StyledCol>
      </Row>

      <Row gutter={24}>
        <StyledCol>{book}</StyledCol>
      </Row>
    </div>
  );
};

export default Booking;
