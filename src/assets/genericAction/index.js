import axios from "axios";
import moment from "moment";

function getTodayDate() {
  var today = moment().format().split("+")[0];
  return today;
}

function getMondayOfCurrentWeek() {
  const today = new Date();
  const first = today.getDate() - today.getDay(2) + 1;

  const monday = new Date(today.setDate(first));

  const momentConvert = moment(monday).format().split("+")[0];
  return momentConvert;
}

function getPreviousDate(date, interval) {
  const toDate = new Date(date);
  const fromDate = new Date(toDate);
  fromDate.setDate(fromDate.getDate() - interval);
  return fromDate;
}

function getNextDate(date, interval) {
  const toDate = new Date(date);
  const fromDate = new Date(toDate);
  fromDate.setDate(fromDate.getDate() + interval);
  return fromDate;
}

function monthOfYearAsString(monthIndex) {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][monthIndex];
}

function dayOfWeekAsString(dayIndex) {
  return ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][dayIndex];
}

function fullMonthOfYearAsString(monthIndex) {
  return [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][monthIndex];
}

function getDateInFormatFormControl(date) {
  return moment(date).format("YYYY-MM-DD");
}

function getTimeInFormatFormControl(value) {
  if (value) {
    var today = new Date(value);
    var hour =
      today.getHours() < 10 ? "0" + today.getHours() : today.getHours();
    var minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    var seconds =
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    var time = hour + ":" + minutes + ":" + seconds;
    return time;
  }
}

function getDateInFormat(date) {
  if (date) {
    return moment(date).format("YYYY/MM/DD");
  }
}

function getTimeInFormat(date) {
  return moment(date).format("LT");
}

function changeTimeZone(date) {
  let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (typeof date === "string") {
    return new Date(
      new Date(date).toLocaleString("en-US", {
        timeZone,
      })
    );
  }

  return new Date(
    date.toLocaleString("en-US", {
      timeZone,
    })
  );
}

function getDateAndTime(dateTime) {
  var formatDate = moment(dateTime).format();
  let value = dateDifference(formatDate);
  return `${moment(dateTime).format("LT")}, ${
    value === 0 ? "Today" : dayOfWeekAsString(new Date(dateTime).getDay())
  }`;
}

function getUpdateTime(time) {
  if (time) {
    var timeToChange = new Date(time);
    var hour =
      timeToChange.getHours() < 10
        ? "0" + timeToChange.getHours()
        : timeToChange.getHours();
    var minutes =
      timeToChange.getMinutes() < 10
        ? "0" + timeToChange.getMinutes()
        : timeToChange.getMinutes();
    var newTime = hour + ":" + minutes;
    return newTime;
  }
}

function getPageRecordIndex(PageNumber, index) {
  let pg = PageNumber;
  if (pg < 0) {
    pg *= 0;
  }
  let myCount = index + 1;
  let final = pg * 15 + myCount;
  return final;
}

function getZulluTimeFormat(time) {
  var timeToChange = time
    ? time.length > 5
      ? time.slice(0, 5).replace(":", "") + "Z"
      : time?.replace(":", "") + "Z"
    : "";
  return timeToChange;
}

function convertBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

function getInitialName(name) {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  } else return;
  return initials.toUpperCase();
}

function createImageFromInitials(size, name, color) {
  if (name == null) return;
  name = getInitialName(name);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = canvas.height = size;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);
  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${size / 2}px Roboto`;
  context.fillText(name, size / 2, size / 2);
  return canvas.toDataURL();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function listOfNextYears(number) {
  let expYearArray = [];
  for (let i = 0; i <= number; i++) {
    expYearArray.push(new Date().getFullYear() + i);
  }
  return expYearArray;
}

function listOfMonths() {
  return [
    {
      id: 0,
      value: 1,
      month: "January",
    },
    {
      id: 1,
      value: 2,
      month: "Feburary",
    },
    {
      id: 2,
      value: 3,
      month: "March",
    },
    {
      id: 3,
      value: 4,
      month: "April",
    },
    {
      id: 4,
      value: 5,
      month: "May",
    },
    {
      id: 5,
      value: 6,
      month: "June",
    },
    {
      id: 6,
      value: 7,
      month: "July",
    },
    {
      id: 7,
      value: 8,
      month: "August",
    },
    {
      id: 8,
      value: 9,
      month: "September",
    },
    {
      id: 9,
      value: 10,
      month: "October",
    },
    {
      id: 10,
      value: 11,
      month: "November",
    },
    {
      id: 11,
      value: 12,
      month: "December",
    },
  ];
}

function expiryDateCheck(expiryDate) {
  var GivenDate = expiryDate;
  var CurrentDate = new Date();
  GivenDate = new Date(GivenDate);
  if (GivenDate > CurrentDate) {
    return true;
  } else {
    return false;
  }
}

function truncate(text, startChars, endChars, maxLength) {
  if (text && text.length > maxLength) {
    var start = text.substring(0, startChars);
    var end = text.substring(text.length - endChars, text.length);
    return start + " " + end;
  }
  return text;
}

function replaceSpace(text) {
  var i = 0,
    length = text.length;
  for (i; i < length; i++) {
    text = text.replace(" ", "-");
    text = text.replace(",", "");
  }
  return text;
}

function viewFile(url) {
  var url2;
  var fileExtension = url.substr(url.lastIndexOf(".") + 1);
  console.log("file::", fileExtension);
  if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg"
  ) {
    var image = new Image();
    image.src = url;
    url2 = "https://docs.google.com/viewer?url=" + url;
    console.log("sd", url2);
    window.open(url2, "_blank");
  } else if (fileExtension === "pdf") {
    url2 = "https://docs.google.com/viewer?url=" + url;
    window.open(url2, "_blank");
  } else if (fileExtension === "doc" || fileExtension === "docx") {
    url2 = "https://docs.google.com/viewer?url=" + url;
    window.open(url2, "Image Viewer", "_blank");
  } else if (fileExtension === "ppt") {
    url2 = "https://docs.google.com/viewer?url=" + url;
    window.open(url2, "Image Viewer", "_blank");
  } else if (fileExtension === "xlsx" || fileExtension === "xls") {
    url2 = "https://docs.google.com/viewer?url=" + url;
    window.open(url2, "Image Viewer", "_blank");
  } else if (fileExtension === "txt") {
    url2 = "https://docs.google.com/viewer?url=" + url;
    window.open(url2, "Image Viewer", "_blank");
  }

  //window.open(url);
}

function getFileExtension(file) {
  let lastIndexOfDot = file.lastIndexOf(".");
  let ext = file.slice(lastIndexOfDot + 1, file.length);
  console.log("ext:::", ext);
  return ext;
}

function dateDifference(createdDate) {
  var date1 = new Date(createdDate);
  var date2 = new Date();
  var diffDays = date2.getDate() - date1.getDate();
  if (diffDays < 0) {
    diffDays = diffDays * -1;
  }
  return diffDays;
}

function getCountryTimeZone() {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

function allMonthList() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
}

function alertDialog(msg, yesFunc, params) {
  return window.confirm(msg) && yesFunc(params);
}

function getOperatingSystem(window) {
  let operatingSystem = "Not known";
  if (window.navigator.appVersion.indexOf("Win") !== -1) {
    operatingSystem = "Windows OS";
  }
  if (window.navigator.appVersion.indexOf("Mac") !== -1) {
    operatingSystem = "MacOS";
  }
  if (window.navigator.appVersion.indexOf("X11") !== -1) {
    operatingSystem = "UNIX OS";
  }
  if (window.navigator.appVersion.indexOf("Linux") !== -1) {
    operatingSystem = "Linux OS";
  }

  return operatingSystem;
}

function getBrowser(window) {
  let currentBrowser = "Not known";
  if (window.navigator.userAgent.indexOf("Chrome") !== -1) {
    currentBrowser = "Google Chrome";
  } else if (window.navigator.userAgent.indexOf("Firefox") !== -1) {
    currentBrowser = "Mozilla Firefox";
  } else if (window.navigator.userAgent.indexOf("MSIE") !== -1) {
    currentBrowser = "Internet Exployer";
  } else if (window.navigator.userAgent.indexOf("Edge") !== -1) {
    currentBrowser = "Edge";
  } else if (window.navigator.userAgent.indexOf("Safari") !== -1) {
    currentBrowser = "Safari";
  } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    currentBrowser = "Opera";
  } else if (window.navigator.userAgent.indexOf("Opera") !== -1) {
    currentBrowser = "YaBrowser";
  } else {
    console.log("Others");
  }

  return currentBrowser;
}

const getDataForIp = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  console.log(res.data);
  return res.data.IPv4;
};

const getTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

const timeConversionHMS = (time) => {
  debugger;
  if (time) {
    const offset = moment(time).format("hh:mm:ss");
    return offset;
  }
};

const timeConversionLTS = (time) => {
  if (time) {
    const offset = moment(time, "HH:mm:ss");
    // const offset = moment.utc(time, 'HH:mm:ss').tz(timeZone);
    return offset;
  }
};

const dateAndTimeFormat = (time) => {
  if (time) {
    const offset = moment(time).format("LLL");
    return offset;
  }
};

const dateFormat = (date) => {
  if (date) {
    const offset = moment(date).format("LL");
    return offset;
  }
};

const dateAndTimeFormatForSchedular = (time) => {
  if (time) {
    const date = moment().format().split("T")[0];
    const dateTime = date + "T" + time;
    const offset = moment(dateTime).format("LLL");
    return offset;
  }
};

const CommaSeperatedFunction = (list) => {
  let myList = "";
  if (list) {
    for (var i = 0; i < list.length; i++) {
      if (i === 0) {
        myList = list[i].specialityString;
      }
      if (i > 0) {
        myList = `${myList} , ${list[i].specialityString}`;
      }
    }
    return myList;
  }
};

export {
  getFileExtension,
  replaceSpace,
  viewFile,
  getDataForIp,
  getBrowser,
  getOperatingSystem,
  getTodayDate,
  getPreviousDate,
  getNextDate,
  monthOfYearAsString,
  dayOfWeekAsString,
  getInitialName,
  getDateInFormat,
  convertBase64,
  createImageFromInitials,
  getRandomColor,
  listOfNextYears,
  getDateInFormatFormControl,
  getTimeInFormatFormControl,
  listOfMonths,
  expiryDateCheck,
  fullMonthOfYearAsString,
  dateDifference,
  getCountryTimeZone,
  allMonthList,
  getTimeInFormat,
  alertDialog,
  getUpdateTime,
  getPageRecordIndex,
  getZulluTimeFormat,
  truncate,
  changeTimeZone,
  getDateAndTime,
  getTimeZone,
  timeConversionHMS,
  timeConversionLTS,
  dateAndTimeFormat,
  getMondayOfCurrentWeek,
  dateAndTimeFormatForSchedular,
  CommaSeperatedFunction,
  dateFormat,
};
