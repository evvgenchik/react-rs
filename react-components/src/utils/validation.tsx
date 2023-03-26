import { ICardNoValidate } from './types';

const validator = {
  title: (value: string) =>
    value && value[0].toUpperCase() === value[0]
      ? ''
      : 'Name must start with an uppercase letter',

  description: (value: string) =>
    value && value.split(' ').length >= 3
      ? ''
      : 'Description must contain at least three words',

  date: (value: string) =>
    value &&
    Date.parse(value) &&
    new Date(value).getTime() <= new Date().getTime()
      ? ''
      : 'Date must not be future',

  language: (value: string) => (value ? '' : 'Please select language'),
};

// const isValid = (obj: ICardNoValidate) => {
//   let result = true;
//   const keys = Object.keys(obj);

//   keys.forEach((el) => {
//     const key = el as keyof ICardNoValidate;
//     const value = obj[key] as string | undefined;
//     if (!value || !validator[key](value)) {
//       result = false;
//     }
//   });

//   return result;
// };

const validation = (key: string, value: string) => {
  const convertKey = key as keyof ICardNoValidate;
  return validator[convertKey](value);
};

export default validation;
