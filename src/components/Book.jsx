import React from "react";
import { Card, Col, Avatar } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

const Body = styled(Meta)`
  height: 80px;
`;

const StyledCard = styled(Card)`
  margin-top: 20px;
`;

const Book = ({ book: { title, thumbnailUrl, authors, id } }) => {
  const authorsString = authors.join(",");
  let history = useHistory();
  const handleClick = id => history.push(`/book/${id}`);

  return (
    <Col span={6} onClick={() => handleClick(id)}>
      <StyledCard hoverable cover={<img alt="example" src={thumbnailUrl} />}>
        <Body
          title={title}
          description={authorsString}
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
        />
      </StyledCard>
    </Col>
  );
};
export default Book;
