import { format, utcToZonedTime } from "date-fns-tz";

const today = new Date();
const timeZone = "Africa/Kigali";

export const kigaliRwandaZonedTime = format(
  utcToZonedTime(today, timeZone),
  "yyy-MM-dd HH:mm:ss"
);
export const kigaliRwandaTime = format(today, "yyy-MM-dd HH:mm:ss");
