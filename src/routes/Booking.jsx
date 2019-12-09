import React, { useState, useEffect } from "react";
import { Row, Button } from "antd";
import Dropdown from "../components/Dropdown";
import RangePicker from "../components/RangePicker";
import Book from "../components/Book";
import StyledCol from "../components/StyledCol";
import moment from "moment";
import datesIntercept from "../utils/datesIntercept";
import openNotification from "../utils/openNotification";
import { getAllBooks } from "../services/BookService";
import { useHistory } from "react-router-dom";

const Booking = () => {
  const [apiBooks, setBooks] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);

  const [isDateSelected, setIsDateSelected] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedDate, setSelectedDate] = useState([null, null]);

  useEffect(() => {
    const getBooks = async () => {
      const getDataAndUpdate = async () => {
        const apiBooks = await getAllBooks();
        setBooks(apiBooks.data);
      };
      getDataAndUpdate();
    };

    getBooks();
  }, []);

  useEffect(() => {
    setIsDateSelected(false);
    setSelectedDate([null, null]);
  }, [selectedBook]);

  const onDateChange = (date, dateRange) => {
    if (datesIntercept(disabledDates, dateRange)) {
      openNotification(
        "warning",
        "Can't book",
        "You can't book in this dates, already booked"
      );
      setIsDateSelected(false);
      setSelectedDate([null, null]);
    } else {
      let mapping = dateRange.map(date => moment(date));
      setSelectedDate(mapping);
      setIsDateSelected(true);
    }
  };

  const rangePicker = selectedBook && (
    <RangePicker
      disabledDates={disabledDates}
      setIsDateSelected={setIsDateSelected}
      value={selectedDate}
      onChange={onDateChange}
    />
  );

  const dropdown = (
    <Dropdown
      books={apiBooks}
      setDisabledDates={setDisabledDates}
      setSelectedBook={setSelectedBook}
    />
  );

  const bookButton = isDateSelected && (
    <Button
      onClick={() => {
        openNotification(
          "success",
          "Booking done!",
          `You booked ${selectedBook.title}`
        );
      }}
    >
      Book
    </Button>
  );

  const book = selectedBook && <Book book={selectedBook} />;

  const bookDescription = selectedBook && (
    <div> {selectedBook.description}</div>
  );

  const bookingCost = selectedBook && (
    <h4> Booking bookingCost: {selectedBook.bookingCost}$</h4>
  );

  return (
    <div>
      <Row gutter={24}>
        <StyledCol span={12}>{dropdown}</StyledCol>
        <StyledCol span={8}>{rangePicker}</StyledCol>
        <StyledCol span={2}>{bookButton}</StyledCol>
      </Row>

      <Row gutter={24}>
        <StyledCol>{book}</StyledCol>
        <StyledCol> {bookDescription} </StyledCol>
        {bookingCost}
      </Row>
    </div>
  );
};

export default Booking;
