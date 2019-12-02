import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Dropdown = ({ books }) => {
  const bookTitles = books.map(book => (
    <Option key={book.id} value={book.title}>
      {book.title}
    </Option>
  ));

  const filter = (input, option) => {
    return (
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  };

  return (
    <div>
      <Select showSearch filterOption={filter} style={{ width: "300px" }}>
        {bookTitles}
      </Select>
    </div>
  );
};

export default Dropdown;
