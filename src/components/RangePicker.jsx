import React from "react";
import { DatePicker } from "antd";
import moment from "moment";
const { RangePicker: Picker } = DatePicker;

const RangePicker = ({ disabledDates, setIsDateSelected }) => {
  const onChange = (date, dateString) => {
    console.log(dateString);

    if (datesIntercept(disabledDates, dateString)) {
      alert("dates intercept, you can't book");
    } else setIsDateSelected(true);
  };

  function datesIntercept(disabledDates, selectedRange) {
    const firstDate = moment(selectedRange[0]).format("YYYY-MM-DD");
    const lastDate = moment(selectedRange[1]).format("YYYY-MM-DD");
    for (let i = 0; i < disabledDates.length; i++) {
      let date = moment(disabledDates[i]).format("YYYY-MM-DD");

      if (
        moment(date).isAfter(firstDate, "day") &&
        moment(date).isBefore(lastDate, "day")
      )
        return true;
    }
    return false;
  }

  const disableDates = current => {
    return disabledDates.find(
      date => date === moment(current).format("YYYY-MM-DD")
    );
  };

  return <Picker onChange={onChange} disabledDate={disableDates} />;
};

export default RangePicker;
