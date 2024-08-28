import moment from "moment";
import { Education } from "../services";

export const formatEducationDates = (education: Education) => {
  const startDate = moment(
    `${education.startYear}-${education.startMonth}`,
    "YYYY-M"
  );
  const endDate = moment(
    `${education.endYear}-${education.endMonth}`,
    "YYYY-M"
  );
  const formattedDateRange = `${startDate.format(
    "MMMM / YYYY"
  )} - ${endDate.format("MMMM / YYYY")}`;

  return formattedDateRange;
};
