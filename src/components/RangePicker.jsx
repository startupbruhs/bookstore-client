import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker: Picker } = DatePicker;

const RangePicker = ({ disabledDates, setIsDateSelected }) => {
  const onChange = (date, dateString) => {
    setIsDateSelected(true);
    console.log(date);
    console.log(dateString);
  };

  const disableDates = current => {
    return disabledDates.find(
      date => date === moment(current).format("YYYY-MM-DD")
    );
  };

  return <Picker onChange={onChange} disabledDate={disableDates} />;
};

export default RangePicker;
