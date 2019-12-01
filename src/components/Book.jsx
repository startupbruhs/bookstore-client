import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;

const Book = ({ book: { title, thumbnailUrl, authors } }) => {
  const authorsString = authors.join(",");
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240, marginBottom: 20 }}
        cover={<img alt="example" src={thumbnailUrl} />}
      >
        <Meta title={title} description={authorsString} />
      </Card>
    </Col>
  );
};
export default Book;
