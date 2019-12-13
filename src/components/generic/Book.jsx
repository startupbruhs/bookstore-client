import React from "react";
import { Col } from "antd";

import { useHistory } from "react-router-dom";
import BookCard from "./BookCard";

const Book = ({ book: { title, thumbnailUrl, authors, id, tags } }) => {
  const authorsString = authors.join(",");
  let history = useHistory();
  const handleClick = id => history.push(`/book/${id}`);

  return (
    <Col span={6} onClick={() => handleClick(id)}>
      <BookCard
        title={title}
        thumbnailUrl={thumbnailUrl}
        authors={authorsString}
        tags={tags}
      />
    </Col>
  );
};
export default Book;
