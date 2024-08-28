import moment from "moment";

export const formatDates = (
  startYear: number,
  startMonth: number,
  endYear: number,
  endMonth: number
) => {
  const startDate = moment(`${startYear}-${startMonth}`, "YYYY-M");
  const endDate = moment(`${endYear}-${endMonth}`, "YYYY-M");
  const formattedDateRange = `${startDate.format(
    "MMMM / YYYY"
  )} - ${endDate.format("MMMM / YYYY")}`;

  return formattedDateRange;
};
