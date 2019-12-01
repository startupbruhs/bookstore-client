import React, { useState } from "react";
import { Select } from "antd";

const Dropdown = ({ books }) => {
  console.log(books);

  const [options, setOptions] = useState(books);

  const bookTitles = books.map(book => (
    <option key={book.id}>{book.title}</option>
  ));

  const filter = bookTitle => {
    // Insert search logic here
  };

  return (
    <div>
      <Select showSearch="true" onSearch={filter} style={{ width: "300px" }}>
        {bookTitles}
      </Select>
    </div>
  );
};

export default Dropdown;
