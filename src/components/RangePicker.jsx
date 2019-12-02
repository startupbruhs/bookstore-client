import React from "react";
import { DatePicker } from "antd";
const { RangePicker: Picker } = DatePicker;

const RangePicker = {disabledDates} => {
  const onChange = (date, dateString) => {
    console.log(date);
    console.log(dateString);
  };

  return <Picker onChange={onChange} disabledDate={disabledDates} />;
};

export default RangePicker;
