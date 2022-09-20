const emailRegExp = /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/;

export const validateRequired = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }

  return "";
};

export const validateEmail = (value: string) => {
  if (value === "") {
    return "Обязательное поле";
  }

  if (!emailRegExp.test(value)) {
    return "Неправильный формат email";
  }
  //сделать проверку символов, допускается только латиница
  // if(){}

  return "";
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
) => {
  if (password !== confirmPassword) {
    return "Пороли не совпадают";
  }

  return "";
};
