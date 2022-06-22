export const validate = () => {
  let errors: string[] = []

  const isEmail = (email: string): void => {
    if (!String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      errors.push(`The email address not following the format example@domain.com`)
    }
  }

  const isString = (str: string, identifier: string): void => {
    if (typeof str !== 'string') {
      errors.push(`The ${identifier} must be a string`)
    }
  }

  const isBoolean = (bool: boolean, identifier: string): void => {
    if (typeof bool !== 'boolean') {
      errors.push(`The ${identifier} must be a boolean`)
    }
  }

  const isNumber = (num: Number, identifier: string): void => {
    if (typeof num !== 'number') {
      errors.push(`The ${identifier} must be a number`)
    }
  }

  const isDate = (date: string, identifier: string): void => {
    if (!Boolean(Date.parse(date))) {
      errors.push(`The ${identifier} must be a date with format yyyy-MM-dd`)
    }
  }

  const isInEnum = (str: any, Enum: Object, identifier: string) => {
    if (!Object.values(Enum).includes(str)) {
      errors.push(`The ${identifier} not follow ${Object.keys({ Enum })[0]} values`)
    }
  }

  const withPattern = (str: string, pattern: RegExp, identifier: string): void => {
    if (!pattern.test(str)) {
      errors.push(`The ${identifier} not follow the pattern ${pattern}`)
    }
  }

  const getErrors = () => {
    return errors;
  }

  return {
    isString,
    isNumber,
    isDate,
    isInEnum,
    isBoolean,
    getErrors,
    isEmail,
    withPattern
  }
}






