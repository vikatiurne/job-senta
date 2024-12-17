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
    return new Date(date).toLocaleDateString("en-US", options[length]);
  }
  
  static transformDateValues(values) {  
    const transformDateField = (dateField) => {  
      return dateField ? new Date(dateField) : null;  
    }; 
  const traverseAndTransform = (obj) => {  
    if (Array.isArray(obj)) {  
      return obj.map(item => traverseAndTransform(item));  
    }  

    if (typeof obj === "object" && obj !== null) {  
      return Object.keys(obj).reduce((acc, key) => {  
        if (key.endsWith("dateStart") || key.endsWith("dateEnd")) {  
          acc[key] = transformDateField(obj[key]);  
        } else {  
          acc[key] = traverseAndTransform(obj[key]); 
        }  
        return acc;  
      }, {});  
    }  

    // Если это не объект и не массив, возвращаем как есть  
    return obj;  
  };  

  return traverseAndTransform(values);  
}  
}
