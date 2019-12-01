import React from "react";
import { Card, Col } from "antd";

const { Meta } = Card;

const Book = ({ book: { name, imagePath, author } }) => {
  console.log(imagePath);
  return (
    <Col span={6}>
      <Card
        hoverable
        style={{ width: 240, marginBottom: 20 }}
        cover={<img alt="example" src={imagePath} />}
      >
        <Meta title={name} description={author} />
      </Card>
    </Col>
  );
};
export default Book;
