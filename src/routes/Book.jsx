import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { URL } from "../configs/site";
import Book from "../components/Book";

const getBookData = async id => {
  return await axios.get(`${URL}?id=${id}`);
};

const BookPage = () => {
  const { id } = useParams();
  const [bookComp, setBookComp] = useState(null);

  useEffect(() => {
    const getDataAndUpdate = async () => {
      const content = await getBookData(id);
      setBookComp(content.data[0]);
    };
    console.log(`content is:  `);

    getDataAndUpdate();
  }, [id]);

  return bookComp && <Book book={bookComp} />;
};

export default BookPage;
