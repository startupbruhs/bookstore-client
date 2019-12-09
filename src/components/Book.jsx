import React from "react";
import { Card, Col, Avatar, Tag } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const Body = styled(Meta)``;

const StyledCard = styled(Card)`
  margin-top: 20px;
  margin-bottom: 10px !important;
  display: block;
  width: 100%;
`;

const Book = ({ book: { title, thumbnailUrl, authors, id, tags } }) => {
  const authorsString = authors.join(",");
  let history = useHistory();
  const handleClick = id => history.push(`/book/${id}`);
  const bookTags = tags.map(tag => <Tag color="magenta">{tag}</Tag>);

  return (
    <Col span={6} onClick={() => handleClick(id)}>
      <StyledCard hoverable cover={<img alt="example" src={thumbnailUrl} />}>
        <Body
          style={{ display: "block", width: "100%" }}
          title={title}
          description={authorsString}
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
        />
        {bookTags}
      </StyledCard>
    </Col>
  );
};
export default Book;
