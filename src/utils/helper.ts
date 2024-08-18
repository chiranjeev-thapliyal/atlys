import { ClassType, FormConfig, FormState } from "./types";

export const classMerge = (...inputs: ClassType[]) => {
  return inputs.flat().filter(Boolean).join(" ").trim();
};

export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  return regex.test(email);
}

export const getInitialFormState = <T extends FormConfig>(config: T): FormState<T> => {
  return Object.keys(config).reduce((acc, key) => {
    const value = config[key].value;
    const isValidValue = config[key].validate(value);
    acc[key as keyof T] = {value: value, error: !isValidValue};
    return acc;
  }, {} as FormState<T>);
}
