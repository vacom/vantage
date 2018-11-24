/**
 * Number Utilities
 */

//Generates a random number
export const random = (min = 0, max = 10) => {
  return Math.floor(Math.random() * (max - min) + min);
};

//Generates a random guid
export const guid = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  // eslint-disable-next-line
  return s4() + "" + s4() + "" + s4() + "" + s4();
};

export const generateToken = () => {
  guid();
};

export const generateExpiration = () => {
  const now = new Date();
  return new Date(now.getTime() + 3600000).toISOString();
};

/**
 * String Utilities
 */

export const removeAccents = str => {
  let accents =
    "ÀÁÂÃÄÅàáâãäåßÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž";
  let accentsOut =
    "AAAAAAaaaaaaBOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  str = str.split("");
  str.forEach((letter, index) => {
    let i = accents.indexOf(letter);
    if (i !== -1) {
      str[index] = accentsOut[i];
    }
  });
  return str.join("");
};

export const formatUsername = str => {
  str = str.replace(/\s+/g, ""); //removes the spaces
  str = str.toLowerCase(); //all the letter to lowercase
  removeAccents(str); //removes all the string accents
};

export const handleExpression = str => {
  return str.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
};

export const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const validateEmail = email => {
  // eslint-disable-next-line
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const emailBlackList = (
  email,
  list = ["demo", "mailinator", "maildrop"]
) => {
  if (email.includes("@")) {
    const data = email.split("@");
    const string = data[1].split(".");
    return list.indexOf(string[0]) > -1;
  }
  return false;
};

export const convertArrayOfObjectsToCSV = args => {
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;
  data = args.data || null;
  if (data == null || !data.length) {
    return null;
  }
  columnDelimiter = args.columnDelimiter || ",";
  lineDelimiter = args.lineDelimiter || "\n";
  keys = Object.keys(data[0]);
  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;
  data.forEach(item => {
    ctr = 0;
    keys.forEach(key => {
      if (ctr > 0) result += columnDelimiter;
      result += item[key];
      ctr++;
    });
    result += lineDelimiter;
  });
  return result;
};

export const downloadCSV = (args, content) => {
  var filename, link, data;
  var csv = module.exports.convertArrayOfObjectsToCSV({
    data: content
  });
  if (csv == null) return;
  filename = args.filename || "export.csv";
  if (!csv.match(/^data:text\/csv/i)) {
    csv = "data:text/csv;charset=utf-8," + csv;
  }
  data = encodeURI(csv);
  link = document.createElement("a");
  link.setAttribute("href", data);
  link.setAttribute("download", filename);
  link.click();
};

/**
 * Browser Utilities
 */

export const refreshPage = () => {
  window.location.reload();
};

export const dynamicWidth = () => {
  return window.innerWidth;
};

export const getUrlParam = (name, url) => {
  if (!url) url = window.location.href;
  let regexS = "[\\?&]" + name + "=([^&#]*)";
  let regex = new RegExp(regexS);
  let results = regex.exec(url);
  return results == null ? null : results[1];
};
