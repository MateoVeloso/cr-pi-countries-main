const regexNotNumbers = /^[^\d]+$/;
const regexNumbers = /^[0-9]+$/;

const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value) return "The name cannot be empty";
      if (!regexNotNumbers.test(value)) return "The name cannot have numbers";
      if (value.length > 20)
        return "The name cannot have more than 20 characters";
      break;
    case "duration":
      if (!value) return "The duration cannot be empty";
      if (!regexNumbers.test(value))
        return "Duration can only have numbers, and positive";
      if (Number(value) > 24) return "Duration cannot be greater than 24 hours";
      break;
    case "difficulty":
    case "season":
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
