export const handleError = (error) => {
  let customError = {
    title: "Error",
    text: "An unknown error has occurred.",
  };

  if (!error.response) {
    return {
      title: "The server is unavailable. Please try again later",
      text: "Sorry, the server is temporarily unavailable.",
    };
  }

  switch (error.response.status) {
    case 400:
      customError = {
        title: error.response.data.message.title,
        text: error.response.data.message.text,
      };
      break;
    case 401:
      customError = {
        title: error.response.data.message.title,
        text: error.response.data.message.text,
      };
      break;
    case 403:
      customError = {
        title: error.response.data.message.title,
        text: error.response.data.message.text,
      };
      break;

    case 404:
      customError = {
        title: error.response.data.message.title,
        text: error.response.data.message.text,
      };
      break;
    case 500:
      customError = {
        title: "The server is unavailable. Please try again later",
        text:
          error.response.data.message.text ||
          "Sorry, the server is temporarily unavailable.",
      };
      break;
    default:
      customError = {
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again later.",
      };
      break;
  }

  return customError;
};
