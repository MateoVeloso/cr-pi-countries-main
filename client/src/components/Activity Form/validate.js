const validateField = (name, value, activityNames) => {

  const errors = {};
  const regexNotNumbers = /^[^\d]+$/;

  switch (name) {
    case "name":
      if (!value) errors.name = "Type a Name";
      if (value.length > 25) errors.name = "Name is to long";
      if (value && value.length < 3) errors.name = "Name is to short";
      if (value && !regexNotNumbers.test(value)) errors.name = "You can't use numbers";
      if(activityNames.includes(value)) errors.name = "There's already an activity with that name";
    case "duration":
      if (value && value<1) errors.duration = "Use posible numbers";
      if (value > 72) errors.duration = "Can't create an activity longer than 3 days";
    case "difficulty":
      if (!value) errors.difficulty = "Choose an option";
    case "season":
      if (!value) errors.season = "Choose an option";
    case "countriesId":
      if (value.length<1) errors.countriesId = "Choose at least one country";
    default:
  }
  return errors;
};

export default validateField;