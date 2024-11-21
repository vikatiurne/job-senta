const options = {
  long: {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
  short: {
    month: "long",
    year: "numeric",
  },
  day: {
    day: "numeric",
  },
  month: {
    month: "long",
  },
  year: {
    year: "numeric",
  },
};


export default class DateServices {
  static getDate(date, length) {
    return new Date(date).toLocaleDateString(
      "en-US",
      options[length]
    );
  }
}
