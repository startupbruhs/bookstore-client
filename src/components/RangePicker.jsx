import React from "react";
import { DatePicker } from "antd";
import datesIntercept from "./utils/datesIntercept";
import message from "./utils/message";
import moment from "moment";

const { RangePicker: Picker } = DatePicker;

const RangePicker = ({ disabledDates, setIsDateSelected, selectedDate }) => {
  const onChange = (date, dateRange) => {
    if (datesIntercept(disabledDates, dateRange)) {
      message.info("You can't book in this dates, already booked");
      setIsDateSelected(false);
    } else setIsDateSelected(true);
  };

  const disableDates = current => {
    return disabledDates.find(
      date => date === moment(current).format("YYYY-MM-DD")
    );
  };

  return (
    <Picker
      onChange={onChange}
      disabledDate={disableDates}
      defaultValue={selectedDate}
    />
  );
};

export default RangePicker;
