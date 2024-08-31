import moment from "moment";

export const formatMonth = (month: number) => {
  return moment(month, "M").format("MMMM");
};
