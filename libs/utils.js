import { format } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

export const formatDate = (date) => {
  const utcDate = new Date(date);
  const jstDate = utcToZonedTime(utcDate, "Asia/Tokyo");
  return format(jstDate, "d MMMM, yyyy");
};
