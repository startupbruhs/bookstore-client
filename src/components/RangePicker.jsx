import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker: Picker } = DatePicker;

const RangePicker = ({ disabledDates }) => {
  const onChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };

  const disableDates = current => {
    let index = disabledDates.findIndex(
      date => date === moment(current).format("YYYY-MM-DD")
    );
    return index === 1;
  };

  return <Picker onChange={onChange} disabledDate={disableDates} />;
};

export default RangePicker;
