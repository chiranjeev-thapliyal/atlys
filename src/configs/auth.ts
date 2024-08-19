import { validateEmail } from "../utils/helper";

export const loginConfig = {
  username: {
    value: '',
    validate: (value: string) => validateEmail(value) || value?.trim()?.length > 0
  },
  password: {
    value: '',
    validate: (value: string) => value?.trim()?.length > 0
  }
}

export const registerConfig = {
  username: {
    value: '',
    validate: (value: string) => value?.trim()?.length > 0
  },
  email: {
    value: '',
    validate: (value: string) => validateEmail(value)
  },
  password: {
    value: '',
    validate: (value: string) => value?.trim()?.length > 0
  }
}

export const AUTH_CONFIG = {
  login: loginConfig,
  register: registerConfig
}
