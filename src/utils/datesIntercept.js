import moment from "moment";

const datesIntercept = (datesArray, selectedRange) => {
  const firstDate = moment(selectedRange[0]).format("YYYY-MM-DD");
  const lastDate = moment(selectedRange[1]).format("YYYY-MM-DD");
  for (let i = 0; i < datesArray.length; i++) {
    let date = moment(datesArray[i]).format("YYYY-MM-DD");

    if (
      moment(date).isAfter(firstDate, "day") &&
      moment(date).isBefore(lastDate, "day")
    )
      return true;
  }
  return false;
};

export default datesIntercept;
