import { validateAge, validateEmail } from "./validation";

describe("validateEmail:", () => {
  test("при вводе емейла realtek_95@mail.ru функция возвращает пустую строку", () => {
    expect(validateEmail("realtek_95@mail.ru")).toEqual("");
  });

  test("validateEmail: при вводе пустой строки функция возвращает ошибку", () => {
    expect(validateEmail("")).toBeTruthy();
  });
});

describe("validatePassword", () => {});

describe("validateAge", () => {
  test("при вводе числа больше 18 функция возвращает пустую строку", () => {
    expect(validateAge(21)).toBe("");
  });
  test("при вводе числа меньше 18 функция возвращает ошибку с текстом ...", () => {});
  test("при вводе пустой строки функция возвращает ошибку с текстом пустое поле", () => {});
  test("при вводе не число функция возвращает ошибку с текстом ввод только чисел", () => {});
});
export {};
