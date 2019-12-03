import React from "react";
import { Select } from "antd";

const { Option } = Select;

const Dropdown = ({
  books,
  setDisabledDates,
  setBookIsSelected,
  setSelectedBook
}) => {
  const bookTitles = books.map(book => (
    <Option key={book.id} value={book.title}>
      {book.title}
    </Option>
  ));

  const onchange = (value, key) => {
    let book = books.find(b => b.id === key.key);
    let bookDisabledDates = book.booked;
    setDisabledDates(bookDisabledDates);
    setBookIsSelected(true);
    setSelectedBook(book);
    //TODO
    /*
    Evety time a book is selected, the DatePicker should be empty if he had values previously
    submit button should be disabled too.
    */
  };

  const filter = (input, option) => {
    return (
      option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    );
  };

  return (
    <div>
      <Select
        placeholder="Select a book"
        showSearch
        filterOption={filter}
        onChange={onchange}
        style={{ width: "300px" }}
      >
        {bookTitles}
      </Select>
    </div>
  );
};

export default Dropdown;
