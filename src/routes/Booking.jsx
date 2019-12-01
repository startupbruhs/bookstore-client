import React, { useState, useEffect } from "react";
import axios from "axios";
import { DatePicker, Row, Col, Button } from "antd";
import Dropdown from "../components/Dropdown";
import { URL } from "../configs/site";

const Booking = () => {
  const [apiBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const apiBooks = await axios.get(URL);
      setBooks(apiBooks.data);
    };

    getBooks();
  }, []);

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Dropdown books={apiBooks}></Dropdown>
      </Col>
      {/*
      The calendar should be a daterangepicker, you pick range of dates to reserve a date.
      The api returns range of dates for which the book is booked. The booked dates should be disabled.
      */}
      <Col span={8}>
        <DatePicker></DatePicker>
      </Col>
      <Button> Book</Button>
    </Row>
  );
};

export default Booking;
