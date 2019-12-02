import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Button } from "antd";
import Dropdown from "../components/Dropdown";
import RangePicker from "../components/RangePicker";
import { URL } from "../configs/site";

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

  const rangePicker = bookIsSelected && (
    <RangePicker
      disabledDates={disabledDates}
      setIsDateSelected={setIsDateSelected}
    ></RangePicker>
  );

  const bookButton = isDateSelected && <Button> Book</Button>;
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Dropdown
          books={apiBooks}
          setDisabledDates={setDisabledDates}
          setBookIsSelected={setBookIsSelected}
        />
      </Col>
      <Col span={8}>{rangePicker}</Col>
      <Col>{bookButton}</Col>
    </Row>
  );
};

export default Booking;
