function dateTimeHelper(timeString1, timeString2) {
  let datetime1 = new Date(timeString1);
  let datetime2 = new Date(timeString2);
  let diff = datetime2 - datetime1;
  let seconds = diff / 1000;
  let minutes = seconds / 60;
  let hours = minutes / 60;
  let days = hours / 24;
  let months = days / 30;
  let years = months / 12;
  return {
    seconds: seconds,
    minutes: minutes,
    hours: hours,
    days: days,
    months: months,
    years: years,
  };
}

module.exports = dateTimeHelper;
