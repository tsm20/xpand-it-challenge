export const formatRevenue = (num) => {
  if (num) {
    return "$" + num.toFixed(3).replace(/\./g, ",");
  } else {
    return "";
  }
};