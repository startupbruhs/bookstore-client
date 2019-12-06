import React from "react";
import { DatePicker } from "antd";

import moment from "moment";

const { RangePicker: Picker } = DatePicker;

const RangePicker = ({ disabledDates, ...rest }) => {
  const disableDates = current => {
    return disabledDates.find(
      date => date === moment(current).format("YYYY-MM-DD")
    );
  };

  return <Picker disabledDate={disableDates} {...rest} />;
};

export default RangePicker;
