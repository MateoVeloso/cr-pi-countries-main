const regexNotNumbers = /^[^\d]+$/;
const regexNumbers = /^[0-9]+$/;

const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value) return "Type a Name";
      if (!regexNotNumbers.test(value)) return "You can't use numbers";
      if (value.length > 30) return "Name is to long";
      break;
    case "duration":
      if (!value) return "Pick an estimate";
      if (!regexNumbers.test(value)) return "Use posible numbers";
      if (Number(value) > 72) return "Can't create an activity longer than 3 days";
      break;
    case "difficulty":
      if (!value) return "Choose an option";
    case "season":
      if (!value) return "Choose an option";
    case "countriesId":
      if (!value)
        return `You must select a ${
          name === "countriesId" ? "country" : "option"
        }`;
      break;
    default:
      break;
  }
  return "";
};

export default validateField;
