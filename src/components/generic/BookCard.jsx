import React from "react";
import { Tag } from "antd";

const Card = ({ title, thumbnailUrl, authors, tags }) => {
  const cardTags = tags.map(tag => <Tag color="blue">{tag}</Tag>);

  return (
    <div class="card">
      <img src={thumbnailUrl} alt="Avatar" style={{ width: "100%" }} />
      <div class="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{authors}</p>
        {cardTags}
      </div>
    </div>
  );
};

export default Card;
